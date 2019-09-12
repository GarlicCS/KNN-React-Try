import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import db from './db';
//import class
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import Try from './components/pages/Try';
import InputPlayer from './components/pages/InputPlayer';
import TryAPI from './components/pages/TryAPI';

class App extends Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
        <Router>
          <PageWrapper>
              <Route 
                path="/home"
                component={Home}
              />
              <Route
                path="/try"
                component={TryAPI}
              />
              <Route
                path="/inputPlayer"
                component={InputPlayer}
              />
          </PageWrapper>
        </Router>
 
    );
}
}

export default App;
