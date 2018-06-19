import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb } from 'react-bootstrap';
import './guests-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>

<div className='lineup-container'>
  <Navbar2/>
  <div className='lineup-banner'>
      <div className='lineup-div'>
        <p className='lineup'>
        SPECIAL GUESTS
        </p>
      </div>
  </div>
  <div className='lineup-day1'>
    <div className='lineup-border'>
      <h1 className='lineup'>
        FRI
      </h1>
    </div>
    <div className='artists-div'>
      <ul className='artists'>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/nozomi.jpg')}/>
            </a>
          </div>
            <h2> Nozomi Sasaki </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/ohtani.jpg')}/>
            </a>
          </div>
          <h2> Shohei Ohtani </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/enako.jpg')}/>
            </a>
          </div>
          <h2> Enako </h2>
        </li>
      </ul>
      </div>
  </div>
  <div className='lineup-day2'>
      <div className='lineup-border'>
      <h1 className='lineup'>
        SAT
      </h1>
      </div>
      <div className='artists-div'>
      <ul className='artists'>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/suzu.jpg')}/>
            </a>
          </div>
            <h2> Suzu Hirose </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/hosada.jpeg')}/>
            </a>
          </div>
          <h2> Mamoru Hosada </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/hirano.jpg')}/>
            </a>
          </div>
          <h2> Aya Hirano </h2>
        </li>
      </ul>
      </div>
  </div>
  <div className='lineup-day3'>
    <div className='lineup-border'>
      <h1 className='lineup'>
        SUN
      </h1>
      </div>
      <div className='artists-div'>
      <ul className='artists'>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/downtown.jpg')}/>
            </a>
          </div>
            <h2> Downtown </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/kana.jpg')}/>
            </a>
          </div>
          <h2> Kana Hanazawa </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../guests/tsai.jpg')}/>
            </a>
          </div>
          <h2> Lauren Tsai </h2>
        </li>
      </ul>
      </div>
  </div>
</div>