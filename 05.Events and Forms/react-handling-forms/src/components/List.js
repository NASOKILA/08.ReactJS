import React, { Component } from 'react';

export default class List extends Component {

    render() {

        let items = this.props.items || [];

        return (
            <ul>
                {this.props.items.map(element => <li key={element.id}>{element.name}</li>)}
            </ul>
        )
    }
}