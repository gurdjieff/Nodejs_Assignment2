// 'use strict';

// var express = require('express');
// var controller = require('./user.controller');

// var router = express.Router();

// router.get('/', controller.index);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

// module.exports = router;


'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/login', controller.login);
// router.post('/:id/comments', controller.add_comment);
// router.post('/:post_id/comments/:comment_id/upvotes', controller.update_comment_upvotes);

module.exports = router;
