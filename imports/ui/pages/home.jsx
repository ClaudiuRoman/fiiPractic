import React, {Button, Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <a href="/login">Login</a> <br/>
                <a href="/register">Register</a> <br/>
                <a href="/donuts">Donuts</a> <br/>
            </div>
        );
    }
}