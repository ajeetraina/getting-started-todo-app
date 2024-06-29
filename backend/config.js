// config.js

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  region: 'us-east-1',
  endpoint: 'http://localhost:4566',
});

module.exports = AWS;
