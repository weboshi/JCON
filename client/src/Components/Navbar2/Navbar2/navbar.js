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
    <Link id='brand-link' href ='/' to="/" style={{fontSize:'70px', paddingBottom: '60px'}}>J-CON</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav id='nav-links' >
  <NavDropdown pullRight={false} eventKey={1} componentClass={Link} noCaret href='/' to="/" title="Explore" id="basic-nav-dropdown">
      <MenuItem class='dropdown-items' eventKey={1.1}>Our Purpose</MenuItem>
      <MenuItem class='dropdown-items' eventKey={1.2}>Programming</MenuItem>
      <MenuItem class='dropdown-items' eventKey={1.3}> else here</MenuItem>
    </NavDropdown>
      <NavItem class='nav-item' eventKey={2} componentClass={Link} href='/about' to="/about">
      About
      </NavItem>
      <ul>
        <li>
          <a href="#">Dropdown</a>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </li>
      </ul>
      </Nav>
 
  
</Navbar>

    )
  }
  }

  // export default withRouter(searchState);