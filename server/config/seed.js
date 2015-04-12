'use strict';

    var User = require('../api/user/user.model');

    User.find({}).remove(function() {
      User.create(  {
        name : 'ppp',
        link:   'http://www.google.com',
        email: 'gurdjieff101@126.com',
        password : '111111'
      });
   });
