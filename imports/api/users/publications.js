 import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function () {
    if (!this.userId) {
        return this.ready();
    }

    return Meteor.users.find(this.userId, {
        fields: {
            emails: 1,
            roles: 1
        }
    })
});
