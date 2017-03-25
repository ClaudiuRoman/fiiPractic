// imports/api/donuts/methods.js
import {Meteor} from 'meteor/meteor';
import Donuts from '/imports/api/donuts/collection';

Meteor.methods({
    'create_a_standard_donut': function () {
        return Donuts.insert({price: 100, type: 'standard'})
    },

    'create_a_donut': function (type) {
        if (!type) {
            throw new Meteor.Error('error', 'The type of donut was not specified', 'Some details');
        }

        return Donuts.insert({price: 100, type: type});
    },

    'donut.find': function (id) {
        return Donuts.findOne({_id: id});
    },

    'donut.remove': function (id) {
        return Donuts.remove({_id: id});
    },
    
    'donuts.list': function () {
        return Donuts.find().fetch();
    },
    
    'donut.add': function(data) {
        Donuts.insert(data);
    },
    'donut.edit': function(id, data) {
        Donuts.update(id, {
            $set: {
                name: data.name
            }
        });
    }
});