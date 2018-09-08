import React from 'react';
import logo from './logo.svg';
import './App.css';
import rerender from './index';
    
let number = 0;
    
const Increase = () => {
  number = number + 1;

  rerender(App(), document.getElementById('root'));
}  

const App = () => (
     
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <span>{number}</span><br/>
        <button onClick={Increase}>Increase</button>
      </div>
    );  

export default App;
