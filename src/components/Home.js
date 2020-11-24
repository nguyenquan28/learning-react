import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleon: true
        };
    }


    Click = () => {
        this.setState({ isToggleon: !this.state.isToggleon });
    }

    Show = () => { 
        if(this.state.isToggleon === true)
            return <h4>Login</h4>
        else
            return <h4>Logout</h4>
    }

render() {
    return (
        <div>
            
            <button onClick={this.Click}>{this.Show()}</button>
        </div>
    );
}
}

export default Home;