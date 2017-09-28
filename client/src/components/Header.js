import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAndroid from 'material-ui/svg-icons/action/android';


class Header extends Component {

    render(){

        return (
            <div>
            <MuiThemeProvider>
            <AppBar title="Fancy"  iconElementRight={<FlatButton label="You" icon={<ActionAndroid />}/>} />
    </MuiThemeProvider>

        </div>

    );
    }
}

export default Header;