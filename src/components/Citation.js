import React from 'react';

class Citation extends React.Component {

    render(){
        return (
            <p id="citation-note">
                If you use MitoVisualize, please cite
                "Lake NJ, Zhou L, Xu J, Lek M. MitoVisualize: a resource for analysis of variants 
                in human mitochondrial RNAs and DNA. Bioinformatics. 2022 May 13;38(10):2967-2969.&nbsp;
                <a href="https://academic.oup.com/bioinformatics/article-abstract/38/10/2967/6585389" target="_blank">
                    doi: 10.1093/bioinformatics/btac216
                </a>.
                PMID: 35561159."
            </p>
        )
    }
}

export default Citation;
