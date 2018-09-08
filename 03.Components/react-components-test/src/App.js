import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import { WelcomeFunction } from './components/Welcome';
import Link from './components/Link';
import Sentences from './components/Sentences';
import Timer from './components/Timer';

class App extends Component {

  componentDidMount() {
    console.log('Rendered !!!')
  }

  render() {

    let SentencesObj = {
      first: "This is the first sentence.",
      second: "This is the second sentence.",
      third: "This is the third sentence."
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Welcome />
        <Welcome title="Atanas" subtitle="Kambitov" />
        <Welcome title="React" subtitle="Framework" />
        {WelcomeFunction()}

        <br />
        <br />
        <p>We use the same component but with deferent properties !!!</p>
        <Link url="https://www.google.com/" name="Google" />
        <Link url="https://www.youtube.com/" name="YouTube" />
        <Link url="https://www.softuni.bg/" name="SoftUni" />

        <br />
        <br />

        <Sentences {...SentencesObj} />
        <br />
        <br />
        <Timer />
      </div>
    );
  }
}

export default App;
