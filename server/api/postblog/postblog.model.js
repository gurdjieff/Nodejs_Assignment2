'use strict';



var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
	var PostblogSchema = new Schema({
	  name: { type: String, required: true },
      title: { type: String, required: true },
      content: { type: String, required: true },
      date: { type: String, required: true }

	});
    
module.exports = mongoose.model('postblogs', PostblogSchema);
