var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lighthouses' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope:['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/lighthouses',
    failureRedirect: '/lighthouses'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/lighthouses');
  });
});

module.exports = router;
