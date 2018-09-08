
import React, { Component } from 'react';

function withLogging(ComponentParam) {

    return class extends Component {
        constructor(params) {
            super(params);
            this.state = {

            }
        }

        componentDidMount() {
            console.log(`${ComponentParam.displayName} ready !`);
        }

        render() {
            return <ComponentParam {...this.props} />
        }
    }
}

export default withLogging;
