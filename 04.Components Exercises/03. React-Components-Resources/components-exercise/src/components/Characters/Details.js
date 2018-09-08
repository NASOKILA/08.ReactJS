import React from 'react';

export default class Details extends React.Component {

    render = () => {

        let details = this.props;

        if(this.props.selected)
        {
            return (
                <section id="bio">
                <div className="image">
                    <img src={details.url} alt="No image"/>
                </div>
                <div className="info">
                    <p>Name: <strong>{this.props.name}</strong></p>
                    <p>Bio: {details.bio}</p>
                </div>
            </section>
        )
    }

    return <h1>Select a character !</h1>
    } 
}