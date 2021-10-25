import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Autocomplete from 'react-autocomplete'

import { Input as ComboboxInput, Item, menuStyle } from './Combobox'

const SearchboxInput = styled(ComboboxInput)`
  ${props => (props.hasResults ? '' : 'background-image: none')};
`

const PlaceholderItem = styled(Item)`
  color: rgba(0, 0, 0, 0.5);
  max-width: 250px;
`

const ProteinGenes = ["MT-CYB", "MT-ND6", "MT-ND5", "MT-ND4", "MT-ND4L", "MT-ND3", "MT-CO3", "MT-ATP6", "MT-ATP8", "MT-CO2", "MT-CO1", "MT-ND2", "MT-ND1"];


class CancelablePromise {
  isCanceled = false

  constructor(executor) {
    this.promise = new Promise((resolve, reject) => {
      const wrappedResolve = value => {
        if (!this.isCanceled) {
          resolve(value)
        }
      }

      const wrappedReject = value => {
        if (!this.isCanceled) {
          reject(value)
        }
      }

      return executor(wrappedResolve, wrappedReject)
    })
  }

  cancel() {
    this.isCanceled = true
  }

  then(onFulfilled, onRejected) {
    return this.promise.then(onFulfilled, onRejected)
  }
}

const renderInput = props => {
  // eslint-disable-next-line react/prop-types
  const { id, ref, ...rest } = props
  return <SearchboxInput {...rest} id={id} ref={ref} />
}

const renderItem = (item, isHighlighted) => (
  <Item key={item.value} isHighlighted={isHighlighted}>
    {item.label}
  </Item>
)

export class Searchbox extends Component {
  static propTypes = {
    fetchSearchResults: PropTypes.func.isRequired,
    id: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    id: undefined,
    placeholder: undefined,
    width: undefined,
  }

  state = {
    inputValue: '',
    isFetching: false,
    isOpen: false,
    options: [],
  }

  selectOnSearchResponse = false

  fetchSearchResults = debounce(query => {
    const { fetchSearchResults, onSelect } = this.props

    if (this.searchRequest) {
      this.searchRequest.cancel()
    }

    if (!query) {
      this.setState({ isFetching: false, options: [] })
      return
    }

    this.searchRequest = new CancelablePromise((resolve, reject) => {
      fetchSearchResults(query).then(resolve, reject)
    })

    this.searchRequest.then(results => {
      this.setState({ isFetching: false, options: results })
      if (this.selectOnSearchResponse && results.length > 0) {
        onSelect(results[0].value, results[0])
      }
      this.selectOnSearchResponse = false
    })
  }, 400)

  componentWillUnmount() {
    if (this.searchRequest) {
      this.searchRequest.cancel()
    }
    this.fetchSearchResults.cancel()
  }

  onChange = (e, inputValue) => {
    this.setState({ inputValue })
    const trimmedValue = inputValue.trim()
    // Set isFetching here instead of in fetchSearchResults so that the "Searching..." message's
    // appearance is not delayed by the debounce on fetchSearchResults
    if (trimmedValue !== '') {
      this.setState({ isFetching: true })
      this.selectOnSearchResponse = false
    }
    this.fetchSearchResults(trimmedValue)
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.selectOnSearchResponse = true
    }
  }

  onMenuVisibilityChange = isOpen => {
    this.setState(state => ({
      isOpen: isOpen || state.isFetching,
    }))
  }

  onSelect = (value, item) => {
    const { onSelect } = this.props
    this.setState({ inputValue: item.label })
    onSelect(item.value, item)
  }

  renderMenu = (items, inputValue, style) => {
    const { isFetching } = this.state
    let menuContent
    if (inputValue === '') {
      return <div />
    }

    if (items.length === 0) {
      if (isFetching) {
        menuContent = <PlaceholderItem>Searching...</PlaceholderItem>
      } else {
        if (ProteinGenes.includes(inputValue.toUpperCase()))
          menuContent = <PlaceholderItem>Visualization for protein-coding genes not available. MitImpact is a database for non-synonymous variants in human mitochondrial protein-coding genes, available at <a style={{color:"gray"}} href="https://mitimpact.css-mendel.it/">https://mitimpact.css-mendel.it/</a>.</PlaceholderItem>
        else
          menuContent = <PlaceholderItem>No results found</PlaceholderItem>
      }
    } else {
      menuContent = items
    }
    return <div style={{ ...style, ...menuStyle }}>{menuContent}</div>
  }

  render() {
    const { id, placeholder, width } = this.props
    const { inputValue, isOpen, options } = this.state

    return (
      <Autocomplete
        // Returning the input value for every item's display value makes Autocomplete's autohighlight
        // work for results whose display value doesn't match the input text (for example, when
        // normalized variant IDs are returned in search results).
        // https://github.com/reactjs/react-autocomplete/blob/41388f7/lib/Autocomplete.js#L404-L410
        getItemValue={() => inputValue}
        inputProps={{
          hasResults: options.length > 0,
          id,
          placeholder,
          onKeyDown: this.onKeyDown,
        }}
        items={options}
        open={isOpen}
        renderInput={renderInput}
        renderItem={renderItem}
        renderMenu={this.renderMenu}
        shouldItemRender={() => true}
        value={inputValue}
        wrapperStyle={{
          display: 'inline-block',
          width,
        }}
        onChange={this.onChange}
        onMenuVisibilityChange={this.onMenuVisibilityChange}
        onSelect={this.onSelect}
      />
    )
  }
}

