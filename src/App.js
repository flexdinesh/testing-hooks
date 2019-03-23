import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Testing React Hooks - Example</p>
        </header>
        <LoginForm />
      </div>
    );
  }
}

export default App;
