import React from 'react';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Face from 'material-ui/svg-icons/action/face';
import Lock from 'material-ui/svg-icons/action/https';
import Setting from 'material-ui/svg-icons/action/settings';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Noti from 'material-ui/svg-icons/social/notifications';
import Account from 'material-ui/svg-icons/action/account-circle';
import Orders from 'material-ui/svg-icons/action/assessment';
import Payment from 'material-ui/svg-icons/action/payment';
import Shipping from 'material-ui/svg-icons/maps/local-shipping';
import Credits from 'material-ui/svg-icons/editor/monetization-on';


class List extends React.Component {

    render() {
        const style = {
            paper: {
                display: 'inline-block',
                float: 'left',
                margin: '16px 32px 16px 0',
            },
            container: {
                lineHeight: '24px',
                marginLeft: '10%',
            },

        };

        return(
            <div style={style.container }>
                <MuiThemeProvider>
                <Paper style={style.paper}>
                <Menu>
                 <MenuItem primaryText="Edit Profile" leftIcon={<Face />} />
                 <MenuItem primaryText="Preferences" leftIcon={<Setting />} />
                 <MenuItem primaryText="Password" leftIcon={<Lock />} />
                 <MenuItem primaryText="Notification" leftIcon={<Noti />} />
                 <MenuItem primaryText="Connected Account" leftIcon={<Account />} />
                </Menu>
                <Divider />
                <Menu>
                  <MenuItem primaryText="Orders" leftIcon={<Orders />} />
                   <MenuItem primaryText="Payment" leftIcon={<Payment />} />
                   <MenuItem primaryText="Shipping" leftIcon={<Shipping />} />
                </Menu>
            <Divider />
            <MenuItem primaryText="Credits" leftIcon={<Credits />} />
            </Paper>
            </MuiThemeProvider>
            </div>
        );
    }
}

export default List;