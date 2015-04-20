'use strict';

    var User = require('../api/user/user.model');
	var Postblog = require('../api/postblog/postblog.model');
	var Comment = require('../api/comment/comment.model');

    User.find({}).remove(function() {
      // User.create(  {
      //   name : 'ppp',
      //   link:   'http://www.google.com',
      //   email: 'gurdjieff101@126.com',
      //   password : '111111'
      // });
   });


   Comment.find({}).remove(function() {
      Comment.create(  {
        // content:"oooooooooooooooo"
      });
   });

   Postblog.find({}).remove(function() {
      Postblog.create(  {
                // content:"oooooooooooooooo"
      });
   });

