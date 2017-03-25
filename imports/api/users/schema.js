import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
    emails: {
        type: Array
    },
    'emails.$': {
        type: Object
    },
    'emails.$.address': {
        type: String
    },
    'emails.$.verified': {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    services: {
        type: Object, blackbox: true
    }
});
