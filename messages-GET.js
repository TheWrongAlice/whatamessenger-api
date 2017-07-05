'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = (event, context, callback) => {
    
    var params = {
        TableName: "messages",
        KeyConditionExpression: 'roomKey = :room_key',
        ExpressionAttributeValues: {':room_key': event.roomKey}
    };
    
    docClient.query(params, function(err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, {messages: data.Items});
        }
    });
    
};
