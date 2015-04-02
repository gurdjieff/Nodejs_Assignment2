'use strict';

    var User = require('../api/user/user.model');

    User.find({}).remove(function() {
      User.create(  {
        name : 'gurdjieff101',
        link:   'http://www.google.com',
        email: 'gurdjieff101@126.com',
        password : '111111'
      },   {
        name : 'gurdjieff102',
        link:   'http://www.baidu.com',
        email: 'gurdjieff102@126.com',
        password : '222222'
      });
   });
