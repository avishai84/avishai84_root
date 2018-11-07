import React, { Component } from 'react';
//import './Header.scss';
import Navigation from './Navigation.js';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {

  render() {
    return (
      <div className="header container">
        <Navigation/>
      </div>
    );
  }
}

export default Header;
