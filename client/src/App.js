import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import List from './List';
import Form from './Form';

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
        <div>
        <MuiThemeProvider>
        <AppBar title="Fancy"  iconElementRight={<FlatButton label="You" icon={<ActionAndroid />}/>} />
        </MuiThemeProvider>
          <List />
          <Form />
      </div>

    );
  }
}

export default App;
