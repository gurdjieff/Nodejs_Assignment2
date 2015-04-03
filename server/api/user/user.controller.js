'use strict';

var _ = require('lodash');
var User = require('./user.model');

// Get list of users
exports.index = function(req, res) {
  User.find(function (err, users) {
    if(err) { return handleError(res, err); }
    return res.json(200, users);
  });
};

// Get a single user
exports.show = function(req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    return res.json(user);
  });
};

// Creates a new user in the DB.
exports.create = function(req, res) {
  console.log(req);
  User.create(req.body, function(err, user) {
    if(err) { return handleError(res, err); }
    return res.json(201, user);
  });
};

exports.login = function(req, res) {
  console.log(req.body);
  // User.findOne(name : req.body.name)

   User.findOne({name:req.body.name, password:req.body.password}, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { 
          return res.json(404, "username or password is wrong");
    }
    return res.json(user);
  });


  // User.create(req.body, function(err, user) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(201, user);
};

// router.post('/login', controller.login);



// exports.create = function(req, res) {
//       req.body.comments = []
//       req.body.upvotes = 0 
//       Post.create(req.body, function(err, post) {
//         if(err) { return handleError(res, err); }
//         return res.json(201, post);
//       });
//     };

// Updates an existing user in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  User.findById(req.params.id, function (err, user) {
    if (err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    var updated = _.merge(user, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, user);
    });
  });
};

// Deletes a user from the DB.
exports.destroy = function(req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    user.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}