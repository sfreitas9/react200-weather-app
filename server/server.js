const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:city', (req, res) => {
  return axios({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`,
    method: 'get'
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch(() => {
      res.status(404).send('error');
    });
});

module.exports = app;
