import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { InputGroup, Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss';



export default class navbar extends Component {

  render() {
    return (
<Navbar default id='all-navbar-default'>
<Navbar.Header>
    <Navbar.Brand pullLeft>
    <Link href ='/' to="/">PolitSearch</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight >
    <NavItem eventKey={1} componentClass={Link} href='/' to="/">
      Home
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} href='/about' to="/about">
      About
      </NavItem>
      <NavItem eventKey={3} componentClass={Link} href='/contact' to="/contact">
      Contact
      </NavItem>
      </Nav>
  <Navbar.Form margin={'auto'}>
      <FormGroup className='navbar-form-group' style={{width:'50%', marginLeft:'20%'}}>
        <InputGroup style={{width:'100%'}}>
        <FormControl type="text" placeholder="Enter address" bsSize='medium' style={{width:'100%'}} />
      <InputGroup.Button>
      <InputGroup.Button >
          <Button bsSize='medium' style={{width:'100%'}} onClick={this.onSubmit} type="submit"><Glyphicon glyph="search" /></Button>
        </InputGroup.Button>
      </InputGroup.Button>
      </InputGroup>
      </FormGroup>
     
    </Navbar.Form>
  
</Navbar>

    )
  }
  }

  // export default withRouter(searchState);