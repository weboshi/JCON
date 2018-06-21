import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb } from 'react-bootstrap';
import './faq-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>

<div className='lineup-container'>
  <Navbar2/>
  <div className='lineup-banner'>
      <div className='lineup-div'>
        <p className='lineup'>
        Frequently Asked Questions
        </p>
      </div>
  </div>
  <div className='faq-main'>
    <p className='faq-p'>
    Are tickets refundable?
    </p>
    <hr/>
    <p className='answer-p'>
    Yes up until a month before J-CON begins.
    </p>
    <p className='faq-p'>
    How will seating be determined for events?
    </p>
    <hr/>
    <p className='answer-p'>
    On a first come first serve basis. Premium badge holders will be allowed priority seating.
    </p>
  </div>
  </div>
  
