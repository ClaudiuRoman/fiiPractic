import React, {Button, Component, PropTypes} from 'react';
import Formsy from 'formsy-react';
import Input from '../lib/Input'

export default class DonutsCreate extends Component {
    constructor() {
        super();
    }

    addDonut(data) {
        Meteor.call('donut.add', data, (err, result) => {
            if(!err) {
                alert('Donut added!');
            }
        });
    }

    render() {
        return (
            <div>
                <Formsy.Form onValidSubmit={this.addDonut.bind(this)}>
                    <Input type="text" name="name" placeholder="Donut name" value=""/>
                    <button type="submit" className="btn btn-default">Add donut</button>
                </Formsy.Form>
                <a href="/donuts">List of Donuts</a>
            </div>
        );
    }
}