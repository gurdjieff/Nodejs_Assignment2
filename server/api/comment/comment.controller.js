'use strict';

var _ = require('lodash');
var Comment = require('./comment.model');
var http = require('http');
var url  = require('url');
var User = require('../user/user.model');

// Get list of comments
exports.index = function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('query:'+query); 
  var key = query.key;
  var name = query.name;
  var blogId = query.blog_id;

  console.log('name:'+name); 
  console.log('name:'+name); 
  console.log('name:'+name); 
  console.log('blogId:'+blogId); 


  User.findOne({name:name, key:key}, function (err, user) {
    if(err) { return handleError(res, err); }
    if(user) { 
        console.log('gurdjieffname:'+name); 
        if (blogId) {
          Comment.find({blog_id:blogId}, function (err, comment) {
            if(err) { return handleError(res, err); }
            if(!comment) { return res.send(404); }
            return res.json(comment);
          });
        } else {
           return res.json(404, "parameter is wrong!");
        }
    } else {
        return res.json(404, "parameter is wrong!");
    }
  });
};

// Get a single comment
exports.show = function(req, res) {
  Comment.find({blog_id:req.params.id}, function (err, comment) {
    if(err) { return handleError(res, err); }
    if(!comment) { return res.send(404); }
    return res.json(comment);
  });
};

exports.searchByBlogAuthor = function(req, res) {
  Comment.find({blog_author:req.params.id}, function (err, comment) {
    if(err) { return handleError(res, err); }
    if(!comment) { return res.send(404); }
    return res.json(comment);
  });
};
// Creates a new comment in the DB.
exports.create = function(req, res) {
  Comment.create(req.body, function(err, comment) {
    if(err) { return handleError(res, err); }
    return res.json(201, comment);
  });
};

// Updates an existing comment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Comment.findById(req.params.id, function (err, comment) {
    if (err) { return handleError(res, err); }
    if(!comment) { return res.send(404); }
    var updated = _.merge(comment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, comment);
    });
  });
};

// Deletes a comment from the DB.
exports.destroy = function(req, res) {
  Comment.findById(req.params.id, function (err, comment) {
    if(err) { return handleError(res, err); }
    if(!comment) { return res.send(404); }
    comment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}