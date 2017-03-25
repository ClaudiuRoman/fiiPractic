import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
    'user.signUp' (data) {
        Accounts.createUser(data);
    }
});
