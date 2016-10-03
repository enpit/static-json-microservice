const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8082;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/:filename', (req, res) => {
  debugger;
  fs.readFile('./data/' + req.params.filename, 'utf-8', (err, data) => {
    if (!err) res.json(data);
  });
});

app.listen(PORT, function() {
  console.log('service listening at port %s', PORT);
});
