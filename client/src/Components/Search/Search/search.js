import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter, Redirect } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Paper from 'material-ui/Paper';
import { DropdownButton, MenuItem, InputGroup, Form, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

import './search.scss'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Results from '../../Results';
// import Table from '../../Table';




export default class searchState extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        zipCode: "",
        info: [],
        offices: [],
        showCheckboxes: true,

      }
    }
  
    onChange = (e) => {
      this.setState({
          zipCode: e.target.value
      });
      console.log(e.target.value)
  }
  
    


  onSubmit = (e) => {
    e.preventDefault();
   
  console.log(this.state.zipCode)
          const {
          zipCode
          } = this.state.zipCode;
          this.getData()
    // }
  }
  
  render() {
    return (
     
      <div className="main" >
      <div >
      <form inline id='form-inline-search'>
      <FormGroup>
      <InputGroup style={{width:'100%', margin:'auto'}}>
      <FormControl bsSize='large' name="zipCode" onChange={this.onChange} value={this.state.zipCode} type="text" placeholder="Enter address" type="text" placeholder='Enter address here!' />
        <InputGroup.Button >
          <Button bsSize='large' onClick={this.onSubmit} type="submit">Search</Button>
        </InputGroup.Button>
      </InputGroup>
      </FormGroup>
      </form>
      </div>
      <br/>
  
   
   {this.state.info.length > 0 &&
   
   <Redirect to={{
     
    pathname: '/results',
    state: { info: this.state.info, officialFed: this.state.federal, officialState: this.state.state, officialLocal: this.state.local, offices: this.state.offices, zipCode: this.state.zipCode } }}/>
   }
   
    {/* <div>
    
      <Table>
      <h1> Representatives </h1> 
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Party</TableHeaderColumn>
      </TableRow>
      <TableBody displayRowCheckbox={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <div className='table-div'> 
      {this.state.info.map(officials => 
      
       <TableRow >
        <TableRowColumn key={officials.name}>{officials.name}</TableRowColumn>
        <TableRowColumn>{officials.party}</TableRowColumn> 
        </TableRow>
      )}
      </div>
      </TableHeader>
      </TableBody>
      </Table>
    </div> */}
  
  </div>
  
 
    )}

  }
