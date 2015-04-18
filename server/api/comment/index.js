'use strict';

var express = require('express');
var controller = require('./comment.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/searchByBlogAuthor/:id', controller.searchByBlogAuthor);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/like', controller.like);

module.exports = router;


