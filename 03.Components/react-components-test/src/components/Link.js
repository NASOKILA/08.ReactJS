import React, { Component } from 'react';

class Link extends Component {
    render() {
  
      return (
        <div>
          <br/>
          <a href={this.props.url}>Go To {this.props.name}</a>
          <br/>
        </div>
      );
  
    }
  } 
  
  export default Link;