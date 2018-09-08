import React, { Component } from 'react';

import './css/Welcome.css';

import Button from './Button';


class Welcome extends Component {

    render() {

        let title = this.props.title || 'Title';
        let subtitle = this.props.subtitle || 'Subtitle';

        return (<h1 className="Welcome">Welcome from {title} {subtitle}</h1>);
    }
}

export function WelcomeFunction() {
    return (
        <div>
            <h1>Welcome Function Exported</h1>
            <Button text="Some Text" />
        </div>);
}

export default Welcome;
