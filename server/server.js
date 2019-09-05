const express = require('express');
const axios = require('axios');
const app = express();
const port = 3030;
const bodyParser = require('body-parser')

app.use(express.static('public'))


app.get('/api/nearby/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://127.0.0.1:5004/api/nearby/${id}`)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.get('/api/reservation/search/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://127.0.0.1:1314/api/reservation/search/${id}`)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.get('/api/reviews/host/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://127.0.0.1:5002/api/reviews/host/${id}`)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.get('/api/images/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://127.0.0.1:5000/api/images/${id}`)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})


app.listen(port, ()=> console.log(`listening on port ${port}!`))