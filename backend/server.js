// server.js

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: '', // Leave blank or set to any valid value
  secretAccessKey: '', // Leave blank or set to any valid value
  region: 'us-east-1',
  endpoint: 'http://localhost:4566', // Localstack S3 endpoint
});

const s3 = new AWS.S3();
