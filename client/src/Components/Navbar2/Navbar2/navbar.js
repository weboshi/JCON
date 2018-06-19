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
    <Link style={{textDecoration:'none !important'}} id='brand-link' href ='/' to="/" style={{fontSize:'70px', paddingBottom: '60px'}}>J-CON</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <div className='nav-links-div'>
    <ul class='nav-dd'>
          <li id='dd-li'>
            <a class='dd-a' href="/" to="/" eventKey={1} componentClass={Link}>EXPLORE</a>
            <ul class='dd-ul'>
              <li><a class='dd-links' href="#" eventKey={1.1}>Our Goal</a></li>
              <li><a class='dd-links' href="#" eventKey={1.2}>FAQ</a></li>
              <li><a class='dd-links' href="#" eventKey={1.3}>Policy</a></li>
            </ul>
          </li>
        </ul>
    <ul class='nav-dd'>
      <li id='dd-li'>
        <a class='dd-a' href="/" to="/" eventKey={2} componentClass={Link}>THE MUSIC</a>
        <ul class='dd-ul'>
          <li><a class='dd-links' href="/lineup" eventKey={2.1}>Line Up</a></li>
          <li><a class='dd-links' href="#" eventKey={2.2}>Special Guests</a></li>
          <li><a class='dd-links' href="#" eventKey={2.3}>Schedule</a></li>
        </ul>
      </li>
    </ul>
    <ul class='nav-dd'>
      <li id='dd-li'>
        <a class='dd-a' href="/" to="/" eventKey={3} componentClass={Link}>REGISTER</a>
        <ul class='dd-ul'>
          <li><a class='dd-links' href="#" eventKey={3.1}>Get a Ticket </a></li>
          <li><a class='dd-links' href="#" eventKey={3.2}>Plan Your Trip</a></li>
        </ul>
      </li>
    </ul>
    
    
      <Button id='registerButton' style={{marginLeft:'450px'}} bsClass='custom-btn' bsSize="large">
        TICKETS
      </Button>
    </div>

  
</Navbar>

    )
  }
  }

  // export default withRouter(searchState);