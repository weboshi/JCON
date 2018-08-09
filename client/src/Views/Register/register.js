import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { ControlLabel, HelpBlock, Checkbox, Radio, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Form } from '../../Components/Form';
import './register.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';
  

export default props =>

<div className='register-container'>
  <Navbar2/>
  <div className='register-banner'>
      <div className='lineup-div'>
        <p className='lineup'>
        Registration
        </p>
      </div>
  </div>
  <div className='register-main'>
    <Form/>
  </div>
  </div>