import React, { Component } from 'react';
import Header from './Header'
import List from './List';
import Form from './Form';

class Home extends Component {

    render(){

        return (
            <div>
                <Header />
                <List />
                <Form />
        </div>

    );
    }
}

export default Home;