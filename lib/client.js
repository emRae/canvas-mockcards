const request = require('request');

const { BASE_URL, ACCESS_TOKEN } = process.env;

const client = (endpoint, opts = { method: 'GET', query: {} }, cb ) => {
  let { query, method } = opts;
  let options = {
    uri: `${BASE_URL}/${endpoint}`,
    qs: { query },
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ACCESS_TOKEN
    },
    json: true
  }

  request(options, (err, res, body) => {
    return cb(err, body)
  })
}

module.exports = client;