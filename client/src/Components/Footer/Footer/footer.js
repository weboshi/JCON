import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import './footer.scss';

export default class navbar extends Component {
  
  
    render() {
      return (
        <div className='footer'>
        <div className='footer-links'>
         
            <ul className='footer-ul'>
              <li style={{paddingBottom:'8px'}}>
                <a style={{fontWeight:'bold',paddingBottom:'50px'}} href='/explore'>EXPLORE </a>
              </li>
              <li>
                <a href='/goal'>Our Mission </a>
              </li>
              <li>
                <a href='/faq'>FAQ </a>
              </li>
              <li>
                <a href='/sponsors'>Sponsors </a>
              </li>
            </ul>
      
            <ul className='footer-ul'>
              <li style={{paddingBottom:'8px'}}>
                <a style={{fontWeight:'bold'}}  href='/themusic'>THE MUSIC </a>
              </li> 
              <li>
                <a href='/lineup'>Line Up </a>
              </li>
              <li>
                <a href='/guests'>Special Guests</a>
              </li>
              <li>
                <a href='/Programming'>Programming </a>
              </li>
            </ul>
       
   
            <ul className='footer-ul'>
              <li style={{paddingBottom:'8px'}}>
                <a style={{fontWeight:'bold'}}  href='/register'>REGISTER </a>
              </li>
              <li>
                <a href='/ticket'>Get a Ticket </a>
              </li>
              <li>
                <a href='/plan'>Plan Your Trip </a>
              </li>
            </ul>
      
          </div>
          <div className='footer-copyright'>
          Copyright © Weboshi Labs 2018
          </div>
      </div>
  
      )
    }
    }