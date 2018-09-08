import React, { Component } from 'react';

export default class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: '',
                password: ''
            },
            error: ''
        }

        this.onInputChanged = this.onInputChanged.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChanged(event) {

        let user = this.state.user;

        let inputName = event.target.name;
        let inputValue = event.target.value;

        user[inputName] = inputValue;

        this.setState({ user });
    }

    onFormSubmit(event) {

        if (this.state.user.username.length < 3) {
            this.setState({
                error: "Username must be more than 3 syumbols !"
            })

            return;
        }
        else if (this.state.user.password.length < 3) {
            this.setState({
                error: "Password must be more than 3 syumbols !"
            })

            return;
        }
        else {
            this.setState({ error: '' })
        }

        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>{this.state.error}</div>
                Username:
                <input
                    onChange={this.onInputChanged}
                    type="text"
                    name="username"
                    value={this.state.username} /><br /><br />

                Password:
                <input
                    onChange={this.onInputChanged}
                    type="password"
                    name="password"
                    value={this.state.password} /><br /><br />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}