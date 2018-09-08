import React, {Component} from 'react';

import rerender from '../index'; 

import App from '../App';

class Button extends Component {

    constructor (props){
        super(props)
    
        this.state = {
            count:0,
            isOn: false
        }
    }

    
    IncreaseStateCount() {

        this.setState({
            count: this.state.count + 1,
            isOn: !this.state.isOn
        })

        rerender(<App />, document.getElementById('root'));
    }
        
    
    render(){
     
        return (
            <button onClick={this.IncreaseStateCount.bind(this)}>
                {this.props.text || 'No Text'} Clicked {this.state.count} Times ! {this.state.isOn ? "ON" : "OFF"}
            </button>
        )
    }
}

export default Button;
