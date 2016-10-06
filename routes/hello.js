var models = require('../models');
var express = require('express');
var router = express.Router();

// Get home page
// router.get('/', function(request, response, next) {
//   // res.render('index', { title: 'Express' })
//   response.redirect('/posts');
// });

router.get('/', function(request, response, next) {
  response.render('hello-world-react', {
    title: 'Hello React!'
  });
});

router.get('/monkey', (req, res, next)=>{
  res.send("Hi");
})

module.exports = router;
