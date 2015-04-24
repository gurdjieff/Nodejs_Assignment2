'use strict';
var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
  var LikeSchema = new Schema({
      name: { type: String, required: true },
      date: { type: String, required: true }
  });
	var PostblogSchema = new Schema({
  	  name: { type: String, required: true },
      title: { type: String, required: true },
      content: { type: String, required: true },
      date: { type: String, required: true },
      likes: [LikeSchema]
	});
	PostblogSchema.path('content').validate(function(n){
        if (n.length > 20000 || n.length < 10) {
            return false;
        }
        return true;
    }, 'blog should be between 10 and 20000 characters');

PostblogSchema.path('title').validate(function(n){
        if (n.length > 100 || n.length < 2) {
            return false;
        }
        return true;
    }, 'blog should be between 2 and 100 characters');

module.exports = mongoose.model('postblogs', PostblogSchema);
