var express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/lighthouses/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;
