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

app.get('/api/reservations/:id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://127.0.0.1:5004/api/reservations/${id}`)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})


app.listen(port, ()=> console.log(`listening on port ${port}!`))