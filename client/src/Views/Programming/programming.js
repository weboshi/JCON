import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb } from 'react-bootstrap';
import './programming-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>

<div className='programming-container'>
  <Navbar2/>
  <div class="parallax">
  <div className='programming-main'>
  <div className='programming-banner'>
      <div className='programming-div'>
        <p className='programming'>
        OUR PROGRAMMING
        </p>
      </div>
  </div>
    <p className='programming-p1'>
    At J-CON, we want our attendees to have the ultimate con experience by delivering interactive programming and the full concert experience.
    </p>
  </div>
  </div>

  <div className='programming-second'>
  <div className='programming-banner'>
      <div className='programming-div'>
        <p className='programming'>
        The Variety Shows
        </p>
      </div>
  </div>
  <p className='programming-p'>
  Our special guests will star in one of J-CON's biggest draws, the Variety Shows, which are modeled after Japanese entertainment shows. They will feature exclusive premieres, comedic skits, interviews, and the fan hour. During the fan hour, the fans will take charge by asking questions and voting on what activities our guests will partake in. The Variety Shows will offer more interaction and entertainment than your typical guest panels and provide attendees with the ultimate fan experience. 
  </p>
  </div>
  <div class="parallax2">
  <div className='programming-third'>
  <div className='programming-banner'>
      <div className='programming-div'>
        <p className='programming'>
        The Concerts
        </p>
      </div>
  </div>
  <p className='programming-p'>
  Some of Japan's biggest musicians will come to J-CON to put on a 3 night concert series for the fans. With 3 artists performing each night, J-CON attendees will be treated to a mini concert  from their favorite artists with ample set lists. The performances will be held in the Nokia Theater, where the acoustics and production  will feel like the artists' official concert series. 
  </p>
  </div>
  </div>
  
</div>