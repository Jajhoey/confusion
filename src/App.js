//eslint-disable-next-line
import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
 }

export default App;
