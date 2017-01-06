import React, { Component } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {mounted: false}
  }
  render() {
    return (
      <div className="App">

        <img src={logo} alt="the project jayhawk logo" className="logo"/>
        <a className="button">Are</a>
    </div>
    )
  }
}

export default App
