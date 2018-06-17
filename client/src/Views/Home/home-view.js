import React from 'react';
import { Route } from 'react-router-dom';
import {
  Search
} from '../../Components/Search';
import { 
  Paper 
} from '../../Components/Paper';
import './home-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';
export default ({ match }) =>

<div>
<Navbar2/>
<div className='container'>
  <div className='main'>
  <p className='main-p'>Bringing fans and industry together for an annual celebration of Japanese pop culture. Join us for AX 2018 on July 5-8 (plus, Pre-Show Night July 4) in Downtown Los Angeles!
    </p>
  </div>
</div>
</div>

