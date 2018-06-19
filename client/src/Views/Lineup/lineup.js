import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb } from 'react-bootstrap';
import './lineup-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>

<div className='lineup-container'>
  <Navbar2/>
  <div className='lineup-banner'>
      <div className='lineup-div'>
        <p className='lineup'>
        LINE UP
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
            <img src={require('../../artists/lisa.jpg')}/>
            </a>
          </div>
            <h2> LiSA </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../artists/indigolaend.jpg')}/>
            </a>
          </div>
          <h2> Indigo La End </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../artists/keyakizaka46.jpg')}/>
            </a>
          </div>
          <h2> Keyakizaka46 </h2>
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
            <img src={require('../../artists/boa.jpg')}/>
            </a>
          </div>
            <h2> BoA </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../artists/silentsiren.jpg')}/>
            </a>
          </div>
          <h2> Silent Siren </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../artists/uverworld.jpg')}/>
            </a>
          </div>
          <h2> Uverworld </h2>
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
            <img src={require('../../artists/utada.jpg')}/>
            </a>
          </div>
            <h2> Utada Hikaru </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../artists/backnumber.jpeg')}/>
            </a>
          </div>
          <h2> back number </h2>
        </li>
        <li className='artist'>
          <div className='artist-pic'>
            <a>
            <img src={require('../../artists/flowerflower.jpg')}/>
            </a>
          </div>
          <h2> FLOWER FLOWER </h2>
        </li>
      </ul>
      </div>
  </div>
</div>