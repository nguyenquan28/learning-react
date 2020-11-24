import React, { Component } from 'react';
import GuestGreeting from './GuestGreeting ';
import UserGreeting from './UserGreeting ';

class Greeting extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn)
            return <UserGreeting/>
        
        return <GuestGreeting/>
    }
}

export default Greeting;