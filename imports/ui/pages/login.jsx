import React, {Button, Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Formsy from 'formsy-react';
import Input from '../lib/Input'

export default class Login extends Component {
    constructor() {
        super();
    }

    handleLogin(data) {
        const email = data.email;
        const password = data.password;

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                console.log('err in log in with password', err);
            } else {
                
            }
        });
    }

    render() {
        return (
            <div className="login-content">
                <Formsy.Form className="login-form" onValidSubmit={this.handleLogin.bind(this)}>
                    <Input type="email" name="email" placeholder="Email" value=""/>
                    <Input type="password" name="password" placeholder="Password" value=""/>
                    <button type="submit" className="btn btn-default">Login</button>
                </Formsy.Form>
            </div>
        );
    }
}