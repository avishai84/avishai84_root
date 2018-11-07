import React, { Component } from 'react';

import Home from './Home';
import Contacts from './Contacts';
import Portfolio from './Portfolio';
import SampleLib from './SampleLib';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';


class Navigation_components extends Component {

  render() {
    return (
    
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/library" component={SampleLib} />
          </Switch>
        </main>
    
    );
  }
}

export default Navigation_components;
