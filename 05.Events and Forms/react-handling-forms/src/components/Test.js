import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.onBtnClicked = this.onBtnClicked.bind(this);
    }

    onBtnClicked(event) {
        console.log(event.target);
        alert(this.props.alertMessage);
    }

    render() {

        return (
            <button onClick={this.onBtnClicked}>Click me !</button>
        )
    }
}       