import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import History from './components/history/History';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/history' component={History}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
