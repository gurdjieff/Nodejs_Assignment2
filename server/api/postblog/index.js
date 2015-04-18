'use strict';

var express = require('express');
var controller = require('./postblog.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/like', controller.like);

router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/', controller.destroy);

module.exports = router;