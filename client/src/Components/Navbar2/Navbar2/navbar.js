import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss';



export default class navbar extends Component {

  render() {
    return (
<Navbar default>
<Navbar.Header style={{padding:'60px'}}>
<Navbar.Brand pullLeft style={{height:'50%'}}>
    <Link style={{textDecoration:'none !important'}} id='brand-link' href ='/' to="/" style={{fontSize:'70px'}}>J-CON</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <div className='nav-links-div'>
    <ul class='nav-dd'>
          <li id='dd-li'>
            <a class='dd-a' href="/" to="/" eventKey={1} componentClass={Link}>EXPLORE</a>
            <ul class='dd-ul'>
              <li><a class='dd-links' href="/goal" eventKey={1.1}>Our Mission</a></li>
              <li><a class='dd-links' href="/faq" eventKey={1.2}>FAQ</a></li>
              <li><a class='dd-links' href="/sponsors" eventKey={1.3}>Sponsors</a></li>
            </ul>
          </li>
        </ul>
    <ul class='nav-dd'>
      <li id='dd-li'>
        <a class='dd-a' href="/" to="/" eventKey={2} componentClass={Link}>THE MUSIC</a>
        <ul class='dd-ul'>
          <li><a class='dd-links' href="/lineup" eventKey={2.1}>Line Up</a></li>
          <li><a class='dd-links' href="/guests" eventKey={2.2}>Special Guests</a></li>
          <li><a class='dd-links' href="/programming" eventKey={2.3}>Programming</a></li>
        </ul>
      </li>
    </ul>
    <ul class='nav-dd'>
      <li id='dd-li'>
        <a class='dd-a' href="/register" to="/" eventKey={3} componentClass={Link}>REGISTER</a>
        <ul class='dd-ul'>
          <li><a class='dd-links' href="/register" eventKey={3.1}>Get a Ticket </a></li>
          <li><a class='dd-links' href="/plan" eventKey={3.2}>Plan Your Trip</a></li>
        </ul>
      </li>
    </ul>
    </div>
  
    <div className='date' style={{fontSize:'20px'}}>
    <div className='social' style={{fontSize:'35px',}}>
    <a class='envelope' href="twitter.com/jcon"><i style={{backgroundColor:"transparent", color:"red"}} class="fas fa-envelope"></i></a>
    <a class='twitter' href="twitter.com/jcon"><i style={{backgroundColor:"transparent", color:"red"}} class="fab fa-twitter"></i></a>
    <a class='facebook' href="facebook.com/jcon"><i style={{backgroundColor:"transparent", color:"red", fontSize:"33px"}} class="fab fa-facebook"></i></a>
    <a class='instagram' href="instagram.com/jcon"><i style={{backgroundColor:"transparent", color:"red"}} class="fab fa-instagram"></i></a>
    </div>
  
    <Button id='registerButton' style={{marginLeft:'0px',fontSize:'20px !important'}} bsClass='custom-btn' bsSize="large">
        TICKETS
      </Button>
    </div>
    
  
</Navbar>

    )
  }
  }

  // export default withRouter(searchState);