import React, { Component } from 'react';
import navigation from './navigation.json';
import './Navigation.scss';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Navigation_components from './Navigation_components';

const nav = navigation.nav;

const navMatchActive = (match, location) => {
  if (!match) {
    return false
  }
}


class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle : 'block'
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

toggleNav(){
  const isHide = this.state.toggle == 'none' ?  'block' : 'none' ; 
  this.setState({
    toggle : isHide
  });
}

  render() {
    return (
      <Router>
        <main>
          <div className="nav-wrapper">
            <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <span></span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {nav.map((item) => <li className="nav-item" key={item.id}>
                      <NavLink exact to={item.href} className="nav-link" key={item.id}activeClassName="active" title={item.title}>{item.name}</NavLink>
                    </li>)}
                  </ul>
                </div>
              </nav>
            </header>
            <Navigation_components/>
          </div>
        </main>
      </Router>
    );
  }
}

export default Navigation;
