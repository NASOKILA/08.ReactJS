import React from 'react';
import withLogging from '../helpers/withLogging';

class HomeBase extends React.Component {

    render() {

        const homeMessage = this.props.message || "Home Page";

        return (

            <div>
                <h1>{homeMessage}</h1>
            </div>
        )
    }
}

HomeBase.displayName = "Home";

const Home = withLogging(HomeBase);

export default Home;