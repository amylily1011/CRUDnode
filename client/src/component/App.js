import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Form from './Form';
import { Link } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecureRoute from './SecureRoute';
import Home from './Home';
import List from './List';
import Login from './Login';
import Protected from './Protected';

class App extends Component {

    constructor(){
        super();
        this.state = { users: [] };
    }

    componentWillMount() {
        var url = "http://localhost:8080/api/users";
        Request.get(url).then((response) => {
            this.setState({
            data: response.body

        });
            console.log(response);
    });
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
          <SecureRoute path='/protected' component={Protected} />
              <Route path='/login' component={Login} />
        </div>
          </Router>
    );
  }
}

export default App;
