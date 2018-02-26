const ROOT_PATH = process.cwd();

const express = require('express');
const parser = require('body-parser');
const compress = require('compression');
const path = require('path');

const broadbrandRouter = require(`${ROOT_PATH}/server/broadband/broadband-router`);
const app = express();

app.set('json spaces', 2);

app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());
app.use(compress());

app.use(broadbrandRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
