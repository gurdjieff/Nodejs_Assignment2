'use strict';

var _ = require('lodash');
var crypto = require('crypto')
var User = require('./user.model');
var validator = require('validator');
var url  = require('url');

// Get list of users
exports.index = function(req, res) {
  console.log("index");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('query:'+query); 
  var key = query.key;
  var name = query.name;

  console.log('name:'+name); 
  console.log('key:'+key); 
  User.findOne({name:name, key:key}, function (err, user) {
    if(err) { return handleError(res, err); }
    return res.json(200, user);
  });
};

// Get a single user
exports.show = function(req, res) {
    console.log("show");

  User.findById(req.params.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    return res.json(user);
  });
};

// Creates a new user in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  if (!validator.isLength(req.body.name, 3, 10)) {
      return res.json(404, "name should be between 3 and 10 characters");
  }

  if (!validator.isLength(req.body.password, 5, 10)) {
      return res.json(404, "password should be between 5 and 10 characters");
  }

  if (!validator.isEmail(req.body.email)) {
      return res.json(404, "email is wrong");
  }

  if (req.body.link) {
      if (!validator.isURL(req.body.link)) {
      return res.json(404, "link is wrong");
    }
  }
  


  User.findOne({name:req.body.name}, function (err, user) {
    if(err) { return handleError(res, err); }
    if(user) { 
        console.log("user has beend exist");
        return res.json(404, "username have been used!");
    } else {
      var md5 = crypto.createHash('md5');
      var password = md5.update(req.body.password).digest('hex');
      req.body.password = password;

      var md5Key = crypto.createHash('md5');
      req.body.key = md5Key.update(req.body.password+req.body.name).digest('hex');
      // console.log(req.body);
      User.create(req.body, function(err, user) {
          if(err) { 
              console.log(err);

            return handleError(res, err);
             }
          return res.json(201, user);
  });

  }
    // return res.json(user);
  });


  
};

exports.login = function(req, res) {
  console.log(req.body);
  if (!validator.isLength(req.body.name, 3, 10)) {
      return res.json(404, "name should be between 3 and 10 characters");
  }

  if (!validator.isLength(req.body.password, 5, 10)) {
      return res.json(404, "password should be between 5 and 10 characters");
  }

  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('hex');
  req.body.password = password;
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
  if (req.body.link) {
      if (!validator.isURL(req.body.link)) {
      return res.json(404, "link is wrong");
    }
  }
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