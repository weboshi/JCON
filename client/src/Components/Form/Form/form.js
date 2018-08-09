import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { ControlLabel, HelpBlock, Checkbox, Radio, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './form.scss';



function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
  
  export default class navbar extends Component {

    render() {
      return (
    <form>
      <FieldGroup
        id="formControlsText"
        type="text"
        label="First Name"
        placeholder="Enter text"
      />
        <FieldGroup
        id="formControlsText"
        type="text"
        label="Last Name"
        placeholder="Enter text"
      />
      <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FieldGroup id="formControlsPassword" label="Password" type="password" />

  
      <Checkbox style={{margin:'0',marginBottom:'10px'}}>
        Over 18?
      </Checkbox>
     
  
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select Badge Type</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Select Below</option>
          <option value="other">1 Day Basic Badge</option>
          <option value="other">2 Day Basic Badge</option>
          <option value="other">3 Day Basic Badge</option>
          <option value="other">1 Day Premium Badge</option>
          <option value="other">2 Day Premium Badge</option>
          <option value="other">3 Day Premium Badge</option>
        </FormControl>
      </FormGroup>
  
  
      <Button type="submit">Submit</Button>
    </form>
  );
    }}
