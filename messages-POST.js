'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = (event, context, callback) => {
    
    var params = {
        Item: {
            roomKey: event.roomKey,
            color: event.color,
            message: event.message,
            dateCreated: Date.now()
        },
        TableName: 'messages'
    };
    
    docClient.put(params, function(err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};
