var express = require('express');
var router = express.Router();
const client = require('../lib/client');


router.get('/', (req, res) => {
  console.log("I got to the cards server route - per_page is 5");
  client('/api/v1/courses', { method: 'GET', query: { page: 1, per_page: 5 } }, (err, data) => {
    return res.json(data);
  });
  
});

module.exports = router;