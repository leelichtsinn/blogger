var models = require('../models');
var express = require('express');
var router = express.Router();

// Get home page
// router.get('/', function(request, response, next) {
//   // res.render('index', { title: 'Express' })
//   response.redirect('/posts');
// });

router.get('/hello-world-react', function(request, response, next) {
  response.render('hello-world-react', {
    title: 'Hello React!'
  });
});

module.exports = router;
