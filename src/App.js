import React, { Component } from 'react'
import './App.css'
import Footer from './Components/footer';
import Header from "./Components/header";
import Home from './Components/home';
class App extends Component {
  state = {
    counter: 1
  }

  render() {
    return (
      <div className='app' >
        <Header />
        <Home  counter={this.state.counter} />
        <Footer />
      </div>

    )

  }




}

export default App;
