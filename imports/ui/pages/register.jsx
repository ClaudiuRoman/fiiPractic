import React, {Button, Component, PropTypes} from 'react';
import Formsy from 'formsy-react';
import Input from '../lib/Input'

export default class Register extends Component {
    constructor() {
        super();
    }

    handleRegister(data) {
        Meteor.call('user.signUp', data, (err, result) => {
            if(!err) {
                alert('success');
            }
        });
    }

    render() {
        return (
            <div className="login-content">
                <Formsy.Form className="login-form" onValidSubmit={this.handleRegister.bind(this)}>
                    <Input type="email" name="email" placeholder="Email" value=""/>
                    <Input type="password" name="password" placeholder="Password" value=""/>
                    <button type="submit" className="btn btn-default">Register</button>
                </Formsy.Form>
            </div>
        );
    }
}