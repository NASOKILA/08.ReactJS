import React, { Component } from 'react';

export default class BoundForm extends Component {
    constructor(props) {
        super(props);

        this.state = stateFromChildren(this.props.children);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        let key = e.target.name;
        let value = e.target.value;

        this.setState({
            [key]: value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e, Object.assign({}, this.state));
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>

                {React.Children.map(this.props.children, child => {

                    if (child.type === 'input' && child.props.name) {
                        return <input onChange={this.onChange} value={this.state[child.props.name]} {...child.props} />;
                    }

                    return child;
                })}

            </form>
        )
    }
}


function stateFromChildren(children) {

    let inputs = {};
    React.Children.map(children, child => {

        if (child.type === 'input' && child.props.name) {
            inputs[child.props.name] = '';
        }

    });

    return inputs;
}