import React, { Component } from 'react'
import './App.css'
import Footer from './Components/footer';
import Header from "./Components/header";
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Public from './Pages/public';
import Home from './Pages/home';

import Contactus from './Pages/Contactus';
const history = createBrowserHistory()
class App extends Component {
  state = {
    counter: 1,
    login: false
  }

  render() {
    return (
      <div className='app' >
        <Header />
        <div style={{ flex: 1 }}>
          <div>
            <Link to='/public' >Go to Public Page</Link><br />
            <Link to='/contactus' >go to Contactus page</Link><br />
            <Link to='/' >home</Link><br />
          </div>
          <Switch>
            <Route path='/contactus' component={Contactus} />
            <Route path='/public' component={Public} />
            <Route path='/' component={Home} />

          </Switch>

        </div>


        <Footer />
      </div>

    )

  }




}

export default App;
