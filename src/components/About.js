import React from 'react';

class About extends React.Component {

    render(){
        return(
            <div className="container">
                <h4 className="center">Landing Page</h4>
                <p>Information</p>
                <form className="input-field col s12">
                    <label for="drop">Label</label>
                    <select id="drop" value="HI">
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default About;