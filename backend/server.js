// server.js

const express = require('express');
const multer = require('multer');
const AWS = require('./config');

const app = express();
const upload = multer({ dest: 'uploads/' });

const s3 = new AWS.S3();

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    const s3Params = {
      Bucket: 'your-bucket-name',
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const s3Response = await s3.upload(s3Params).promise();
    res.status(200).json({ url: s3Response.Location });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
