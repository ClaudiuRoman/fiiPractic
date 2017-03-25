import React, {Button, Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Donuts from '/imports/api/donuts/collection.js'

class DonutsList extends React.Component {
    constructor() {
        super();
    }

    removeDonut(id) {
        Meteor.call('donut.remove', id);
    }

    render() {
        const {loading, donuts} = this.props;
        if (loading) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div>
                    {
                        donuts.map((donut) => {
                            return (
                                <div key={donut._id }>
                                    <div> {donut.name}</div>
                                    <a href={"/donut/edit/" + donut._id}>Edit</a>
                                    <button onClick={this.removeDonut.bind(this, donut._id)}>Remove</button>
                                </div>
                            )
                        })
                    }
                    <a href="/donuts/create">Create a donut</a>
                </div>
            )
        }
    }
}

export default createContainer((props) => {
    const handle = Meteor.subscribe('donuts');
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
}, DonutsList)