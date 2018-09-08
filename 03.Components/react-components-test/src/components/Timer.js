import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date(Date.now()).toLocaleString()
        }
    }

    tick() {
        this.setState({
            date: new Date().toLocaleString()
        })
    }

    componentDidMount() {

        this.timer = setInterval(() => {
            this.tick();
        }, 1000)

        fetch('https://www.google.bg/')
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

    render() {
        return (
            <h1>Date and Time is: {this.state.date}</h1>
        )
    }
}

export default Timer;