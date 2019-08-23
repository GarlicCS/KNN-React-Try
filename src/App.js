import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import class
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import Try from './components/pages/Try';
import InputPlayer from './components/pages/InputPlayer';
import mysql from 'mysql';

var connection = mysql.createConnection({
  host : 'localhost',
  user :'root',
  password : '',
  database : 'knn' 
});



class App extends Component{
  constructor(props){
    super (props);
    this.result = {
      
    }
  }

  connecting = () => {
    connection.connect = (err) => {
      if (!err) {
        console.log("Carry on !");
      } else {
        console.log("DB hates you");
      }
    };
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
                component={Try}
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
