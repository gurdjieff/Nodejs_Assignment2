'use strict';
var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
  var CommentSchema = new Schema({
  	  blog_id: { type: String, required: true },
      name: { type: String, required: true },
      content: { type: String, required: true },
      date: { type: String, required: true }

  });

CommentSchema.path('content').validate(function(n){
        if (n.length > 20000 || n.length < 10) {
            return false;
        }
        return true;
    }, 'comment should be between 10 and 20000 characters');

    
module.exports = mongoose.model('comments', CommentSchema);