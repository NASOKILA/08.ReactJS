import React from 'react';
import All from './All';
import { Route } from 'react-router-dom';

const Home = (props) =>
    (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome, {props.username}</h2>

            <Route path={props.match.url + "/all"} component={All} />
        </div>
    );

const Home2 = ({ username }) => <h1>Welcome, {username}</h1>;
const Home3 = ({ username, age }) => <h1>Welcome, {username} - {age}</h1>;

export default Home;