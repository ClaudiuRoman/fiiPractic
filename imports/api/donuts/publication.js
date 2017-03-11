import { Meteor } from 'meteor/meteor';
import Donuts from '/imports/api/donuts/collection'; // no .js ? yep, works like that too!

Meteor.publish('donuts', function () {
    return Donuts.find();
});