'use strict';

var _ = require('lodash');
var Postblog = require('./postblog.model');
var User = require('../user/user.model');

var http = require('http');
var url  = require('url');
var validator = require('validator');

// Get list of postblogs
exports.index = function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('query:'+query); 
  var key = query.key;
  var name = query.name;
  var author = query.author;
  var blogId = query._id;

  console.log('name:'+name); 
  console.log('name:'+name); 
  console.log('name:'+name); 
  console.log('blogId:'+blogId); 


  User.findOne({name:name, key:key}, function (err, user) {
    if(err) { return handleError(res, err); }
    if(user) { 
        console.log('name:'+name); 
        if (author) {
          Postblog.find({name:author}, function (err, postblog) {
            if(err) { return handleError(res, err); }
            if(!postblog) { return res.send(404); }
            return res.json(postblog);
          });
        } else if (blogId) {
          Postblog.findById(blogId, function (err, postblog) {
            if(err) { return handleError(res, err); }
            if(!postblog) { return res.send(404); }
            return res.json(postblog);
          });
        } else {
          Postblog.find(function (err, postblogs) {
            if(err) { return handleError(res, err); }
            return res.json(200, postblogs);
          });
        }
    } else {
        return res.json(404, "parameter is wrong!");
    }
  });
};


// Get a single postblog
exports.show = function(req, res) {
  Comment.find({blog_id:req.params.id}, function (err, comment) {
    if(err) { return handleError(res, err); }
    if(!comment) { return res.send(404); }
    return res.json(comment);
  });
};

exports.like = function(req, res) {
  
  Postblog.findById(req.body.id, function (err, postblog) {
    console.log(req.body);
    if (err) { return handleError(res, err); }
    if(!postblog) { return res.send(404); }
    
    var like_index = _.findIndex(postblog.likes , 
       function(like) {
        return like.name == req.body.name;
    }); 
    if (like_index != -1) {
        return res.json(404, "you have been liked!");
    };

    var like = {
      name: req.body.name,
      date: req.body.date ,
    }

    postblog.likes.push(like);
    postblog.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, postblog);
    });
  });  
};
// Creates a new postblog in the DB.
exports.create = function(req, res) {
  if (!validator.isLength(req.body.content, 10, 20000)) {
      return res.json(404, "blog conent should be between 10 and 20000 characters");
  }

  Postblog.create(req.body, function(err, postblog) {
    if(err) { return handleError(res, err); }
    return res.json(201, postblog);
  });
};

// Updates an existing postblog in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Postblog.findById(req.params.id, function (err, postblog) {
    if (err) { return handleError(res, err); }
    if(!postblog) { return res.send(404); }
    var updated = _.merge(postblog, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, postblog);
    });
  });
};

// Deletes a postblog from the DB.
exports.destroy = function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('query:'+query); 
  var key = query.key;
  var name = query.name;
  var blogId = query.blogId;
  console.log('key:'+key); 
  console.log('name:'+name); 
  console.log('blogId:'+blogId); 

  User.findOne({name:name, key:key}, function (err, user) {
    if(err) { return handleError(res, err); }
    if(user) { 
        console.log('name:'+user); 
        if (blogId) {
          Postblog.findById(blogId, function (err, postblog) {
            if(err) { return handleError(res, err); }
            if(!postblog) { return res.send(404); }
            postblog.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
      });
        } else {
           return res.json(404, "parameter is wrong!");
        }
    } else {
        return res.json(404, "parameter is wrong!");
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}