'use strict';
var validator = require('validator');

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
	var UserSchema = new Schema({
	  name: { type: String, required: true },
      password: { type: String, required: true },
      link: { type: String, optional: false, validate: [ validator.isURL, 'invalid URL' ]},
	  email: { type: String, optional: true , validate: [ validator.isEmail, 'invalid email' ]},
      key: { type: String, optional: true },
      statement: { type: String, optional: false }
	});
    
    UserSchema.path('name').validate(function(n){
        if (n.length > 10 || n.length < 3) {
            return false;
        }
        return true;
    }, 'name should be between 3 and 10 characters');

    module.exports = mongoose.model('users', UserSchema);
