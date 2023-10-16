const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({storage: storage});
const app = express();

app.post('/upload', upload.array('files'), (req, res) => {
  if (req.files.length > 0) {
    console.log('received ' + req.files.length + ' files');
  } else {
    console.log('received ' + req.body);
  }
  res.status(200).json('ok');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(8080);
