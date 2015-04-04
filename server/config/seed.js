'use strict';

    var User = require('../api/user/user.model');

    User.find({}).remove(function() {
      User.create(  {
        name : 'gurdjieff1',
        link:   'http://www.google.com',
        email: 'gurdjieff101@126.com',
        password : '111111'
      },   {
        name : 'gurdjieff2',
        link:   'http://www.baidu.com',
        email: 'gurdjieff102@126.com',
        password : '222222'
      });
   });
