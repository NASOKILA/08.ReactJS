import React from 'react';
import { Route } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>My Footer</footer>
            <Route path="/random" render={() => (
                <h2>Random Router Function Return.</h2>
            )} />
        </div>
    )
}

export default Footer;