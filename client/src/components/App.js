import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import List from '../components/List';
import Login from '../components/Login';

class App extends Component {

    constructor(){
        super();
        this.state = { users: [] };
    }

  render(){

      var data = _.map(this.state.data, (data) => {
            return <div>{data.name}</div>;
            });

    return (
        <Router>
            <div>
            <Route path='/' exact={true} component={Home} />
            <Route path='/list' component={List} />
            <Route path='/login' component={Login} />
        </div>
        </Router>
    );
  }
}

export default App;
