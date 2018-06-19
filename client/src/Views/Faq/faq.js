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
  <div className='mission-main'>
    <p className='mission-p'>
    At J-CON, our mission is to spread the wonderfully unique and inspiring culture of Japan, by bringing their pop culture icons and popular musicians to the United States to participate in one of the most interactive conventions ever.
    </p>
  </div>
  
</div>