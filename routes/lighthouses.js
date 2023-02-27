var express = require('express');
var router = express.Router();
var lighthousesCtrl = require('../controllers/lighthouses');

router.get('/', lighthousesCtrl.index);
router.get('/new', lighthousesCtrl.new);
router.get('/:id', lighthousesCtrl.show);
router.post('/', lighthousesCtrl.create);

module.exports = router;