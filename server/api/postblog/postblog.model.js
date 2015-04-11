'use strict';



var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
	var PostblogSchema = new Schema({
	  name: { type: String, required: true },
      title: { type: String, required: true },
      content: { type: String, required: true },
      date: { type: String, required: true }

	});
	PostblogSchema.path('content').validate(function(n){
        if (n.length > 2000 || n.length < 10) {
            return false;
        }
        return true;
    }, 'name should be between 10 and 2000 characters');

    
module.exports = mongoose.model('postblogs', PostblogSchema);
