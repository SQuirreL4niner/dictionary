var express = require('express');
var router = express.Router();
var request = require('request');
var dictionary = require('oxford-dictionary-api');
var cors = require('cors');

router.use(function(req, res, next){
  res.header('Accept', 'application/json');
  res.header('app_id', '3cc8bc64');
  res.header('app_key', 'ddc475cd3e74d8d041b0a3ec382c9245');
  next();
})

router.use(cors());

router.get('/:term', function(req, res, next) {
  request({
    uri: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' +
    req.param('term'),
    headers: {
      app_id: '3cc8bc64',
      app_key: 'ddc475cd3e74d8d041b0a3ec382c9245'
    }
  }).pipe(res);
});



module.exports = router;
