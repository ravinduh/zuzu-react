import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './leftMenu.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftMenu />
      </div>
    );
  }
}

export default App;
