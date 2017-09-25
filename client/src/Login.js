import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:8080/api/users";
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        var localloginComponent=[];
        localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
            hintText = "Enter you name"
            floatingLabelText = "Id"
            onChange = {(event, newValue) => this.setState(name:newValue)}
           />
          <br/>
          <TextField
            type="password"
            hintText="Enter your password"
            floatingLabelTex="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
         </MuiThemeProvider>
    )
        this.state ={
            name: '',
            password: '',
            loginComponent: localloginComponent,
        }

    }

    componentWillMount(){

    }

    render() {

    }
}

export default Login;