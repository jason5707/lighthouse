var express = require('express');
var router = express.Router();
var lighthousesCtrl = require('../controllers/lighthouses');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', lighthousesCtrl.index);
router.get('/new', ensureLoggedIn, lighthousesCtrl.new);
router.get('/show/:id', lighthousesCtrl.show);
router.post('/', ensureLoggedIn, lighthousesCtrl.create);
router.delete('/lighthouse/:id', lighthousesCtrl.delete);

module.exports = router;