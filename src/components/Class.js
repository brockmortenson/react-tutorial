import React, { Component } from 'react';

class Class extends Component {
    constructor() {
        super();
        this.state = {
            firstName: ''
        }
    }

    handleClick = () => {
        if (this.state.firstName === '') {
            this.setState({ firstName: 'Bob' })
        } else {
            this.setState({ firstName: '' })
        }
    }
    
    render() {
        return (
            <div>
                Class Component
                <p>Name: {this.state.firstName}</p>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default Class;