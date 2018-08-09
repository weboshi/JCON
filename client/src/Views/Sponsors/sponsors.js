import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb } from 'react-bootstrap';
import './sponsors.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>

<div className='lineup-container'>
  <Navbar2/>
  <div className='lineup-banner'>
      <div className='lineup-div'>
        <p className='lineup'>
        SPONSORS
        </p>
      </div>
  </div>
  <div className='sponsors-main'>
  <div className='sponsors-div'>
      <ul className='sponsors'>
        <li className='artist'>
          <div className='sponsor-pic'>
            <a>
            <img className='sponsor' src={require('../../sponsors/toyota.png')}/>
            </a>
          </div>
        </li>
        <li className='artist'>
          <div className='sponsor-pic'>
            <a>
            <img className='sponsor' src={require('../../sponsors/cooljapan.jpg')}/>
            </a>
          </div>
        </li>
        <li className='artist'>
          <div className='sponsor-pic'>
            <a>
            <img className='sponsor' src={require('../../sponsors/kino.jpeg')}/>
            </a>
          </div>
        </li>
      </ul>
      </div>
  </div>
  </div>
  
