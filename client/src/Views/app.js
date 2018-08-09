import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import Lineup from './Lineup'
import Contact from'./Contact'
import Guests from './Guests'
import Goal from './Goal'
import Faq from './Faq'
import Register from './Register'
import Sponsors from './Sponsors'
import Programming from './Programming'
import Plan from './Plan'
import { Navbar2 } from '../Components/Navbar2'
import './app.scss'
import { Footer } from '../Components/Footer'
import { Results } from '../Components/Results'


export default props =>
<BrowserRouter>
  <div className="app">
    <Route exact path="/" component={Home}/>
    <Route path='/goal' component={Goal}/>
    <Route path='/faq' component={Faq}/>
    <Route path='/sponsors' component={Sponsors}/>
    <Route path='/register' component={Register}/>
    <Route path="/lineup" component={Lineup}/>
    <Route path="/guests" component={Guests}/>
    <Route path="/plan" component={Plan}/>
    <Route path="/programming" component={Programming}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/results" component={Results}/>
    <Footer/>
  </div>
</BrowserRouter>
