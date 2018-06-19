import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import About from './About'
import Contact from'./Contact'
import { Navbar2 } from '../Components/Navbar2'
import './app.scss'
import { Footer } from '../Components/Footer'
import { Results } from '../Components/Results'


export default props =>
<BrowserRouter>
  <div className="app">
    <Route exact path="/" component={Home}/>
    <Route path="/lineup" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/results" component={Results}/>

  </div>
</BrowserRouter>
