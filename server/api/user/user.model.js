'use strict';

// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;

// var UserSchema = new Schema({
//   name: String,
//   info: String,
//   active: Boolean
// });

// module.exports = mongoose.model('User', UserSchema);


var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
	var UserSchema = new Schema({
	  name: { type: String, required: true },
      password: { type: String, required: true },
      link: { type: String, optional: true },
	  email: { type: String, optional: true }
	});
    UserSchema.path('name').validate(function(n){
        if (n.length > 10 || n.length < 3) {
            return false;
        }
        return true;
    }, 'name should be between 5 and 10 characters');

    // var CommentSchema = new Schema({
    //     body: { type: String, required: true },
    //     author: { type: String, required: true },
    //     upvotes: Number
    //   });

    // var PostSchema = new Schema({
    //   title: { type: String, required: true },
    //   link: { type: String, optional: true },
    //   username: { type: String, required: true },
    //   comments: [CommentSchema],
    //   upvotes: Number
    // });

    module.exports = mongoose.model('users', UserSchema);
