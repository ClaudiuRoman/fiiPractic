import React, {Button, Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Donuts from '/imports/api/donuts/collection.js'
import route from '/imports/routing/router.js';
import Formsy from 'formsy-react';
import Input from '../lib/Input'

export default class DonutEdit extends Component {
    constructor() {
        super();
        this.state = {loading: true, donut: null}
    }

    componentDidMount() {
        Meteor.call('donut.find', route.current().params.id, (err, res) => {
            this.setState({
                loading: false,
                donut: res // assuming the method returns an array of donuts
            })
        })
    }

    editDonut (data) {
        Meteor.call('donut.edit', this.state.donut._id, data, (err, result) => {
            if(!err) {
                alert('donut modified!');
            }
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div>
                    <Formsy.Form onValidSubmit={this.editDonut.bind(this)}>
                        <Input type="text" name="name" placeholder="Donut name" value={this.state.donut.name}/>
                        <button type="submit" className="btn btn-default">Edit</button>
                    </Formsy.Form>
                    <a href="/donuts">Back to list</a>
                </div>
            );
        }
    }
}