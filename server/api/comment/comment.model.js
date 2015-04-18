'use strict';
var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
  var LikeSchema = new Schema({
      name: { type: String, required: true },
      date: { type: String, required: true }
  });
  var CommentSchema = new Schema({
      blog_author: { type: String, required: true },
      blog_title: { type: String, required: true },
  	  blog_id: { type: String, required: true },
      name: { type: String, required: true },
      content: { type: String, required: true },
      date: { type: String, required: true },
      likes: [LikeSchema]
  });

CommentSchema.path('content').validate(function(n){
        if (n.length > 20000 || n.length < 10) {
            return false;
        }
        return true;
    }, 'comment should be between 10 and 20000 characters');

    
module.exports = mongoose.model('comments', CommentSchema);
