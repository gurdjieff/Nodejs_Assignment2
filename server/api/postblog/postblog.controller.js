'use strict';

var _ = require('lodash');
var Postblog = require('./postblog.model');

// Get list of postblogs
exports.index = function(req, res) {
  Postblog.find(function (err, postblogs) {
    if(err) { return handleError(res, err); }
    return res.json(200, postblogs);
  });
};

// Get a single postblog
exports.show = function(req, res) {
  Postblog.findById(req.params.id, function (err, postblog) {
    if(err) { return handleError(res, err); }
    if(!postblog) { return res.send(404); }
    return res.json(postblog);
  });
};

exports.getMyBlogs = function(req, res) {
  Postblog.find({name:req.params.id}, function (err, postblog) {
    if(err) { return handleError(res, err); }
    if(!postblog) { return res.send(404); }
    return res.json(postblog);
  });
};

// Creates a new postblog in the DB.
exports.create = function(req, res) {
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
  Postblog.findById(req.params.id, function (err, postblog) {
    if(err) { return handleError(res, err); }
    if(!postblog) { return res.send(404); }
    postblog.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}