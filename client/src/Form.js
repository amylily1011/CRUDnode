import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


const languages = [
    {value: 0, name: 'Chinese', currency:'CNY'},
    {value: 1, name: 'English', currency:'USD'},
    {value: 2, name: 'Japanese', currency: 'JPY'},
    {value: 3, name: 'Danish', currency: 'DKK'},
    {value: 4, name: 'Cambodian', currency: 'KHR'},
    {value: 5, name: 'Italian', currency: 'EUR'},
    {value: 6, name: 'Arabic', currency: 'AED'},
    {value: 7, name: 'Thai', currency: 'THB'},
    {value: 8, name: 'Russian', currency: 'RUB'},
    {value: 9, name: 'Spanish', currency: 'EUR'},
];

class Form extends React.Component {


    state = {
        values: [],
    };

    handleChange = (event, index, value) => {
        this.setState({value});
    };

    menuItems(languages) {
        return languages.map((language) => (
            <MenuItem
             key={language.value}
             insethChildren={true}
             checked={this.state.values.indexOf(language.value) > -1}
             value={language.value}
             primaryText={language.name}
            />
        ));
    }


    //TODO: send post request from this form to edit user.

    render() {
        const style = {
            container: {
                lineHeight: '24px',
                marginLeft: '19%',
                padding: '15px',
            },
            radioButton: {
                marginBottom: 16,
            },
            right: {
                float: 'right'
            },
        };

        const items = [];
        const timezone = [];
        const currency = [];
        for (let i=0; i < 10 ; i++) {
            items.push(<MenuItem value={i} key={i} primaryText={languages[i].name} />);
            timezone.push(<MenuItem value={i} key={i} primaryText={`(UTC+0${i}:00)UTC`} />);
            currency.push(<MenuItem value={i} key={i} primaryText={languages[i].currency} />);
        }

        return(
            <div style={style.container }>
    <MuiThemeProvider>
        <Paper style={style.container}>
    <SelectField
        floatingLabelText="Language"
        value={this.state.value}
        onChange={this.handleChange}
    >{items}</SelectField>
        <br/>
        <SelectField
        floatingLabelText="Time Zone"
        value={this.state.value}
        onChange={this.handleChange}
    >{timezone}</SelectField>
        <br/>
        <SelectField
        floatingLabelText="Currency"
        value={this.state.value}
        onChange={this.handleChange}
    >{currency}</SelectField>
        <br/> <br/>
        <Divider />
        <h3>Profile Visibility</h3>
            <span>Mange who can see your activity, things you fancy, your followers, people you follow or in anyone's search results</span>
        <RadioButtonGroup defaultSelected="not_light">
            <RadioButton
        value="not_light"
        label="Everyone"
        style={style.radioButton}
    />
    <RadioButton
        value="light"
        label="Private"
        style={style.radioButton}
    />
    </RadioButtonGroup>
            <br/>

        <h3>Messages</h3>
        <span>Controol who can send you messages.</span>


        <RadioButtonGroup defaultSelected="not_light">
            <RadioButton
        value="light"
        label="Everyone"
        style={style.radioButton}
    />
    <RadioButton
        value="not_light"
        label="People you follow"
        style={style.radioButton}
    />
    <RadioButton
        value="light"
        label="No one"
        style={style.radioButton}
    />
    </RadioButtonGroup>
            <br/>
            <h3>Recently viewed</h3>
            <span>Mange you Fancy Browser</span><br/>
            <span><a href='#'>Delete all items</a></span>

            <br/>
            <Divider />
        <h3>Category lists</h3>
        <span>Automatically add Fancy'd items to the Category list</span>
        <RadioButtonGroup defaultSelected="not_light">
            <RadioButton
        value="not_light"
        label="Enable"
        style={style.radioButton}
    />
    <RadioButton
        value="light"
        label="Disable"
        style={style.radioButton}
    />
    </RadioButtonGroup>
            <br/>
            <Divider />
            <br/>
        <div style={style.right}>
            <RaisedButton label="Save Preferences" primary={true}  />
        </div>
        </Paper>
        </MuiThemeProvider>
        </div>
    );
    }
}

export default Form;