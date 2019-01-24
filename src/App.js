import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchCurrency } from './actions/productActions'
import './App.css'

import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
 
  render() {
    return (
      <div className="App">
      <Header />
      <Body />
      </div>
    );
  }
}

export default App
