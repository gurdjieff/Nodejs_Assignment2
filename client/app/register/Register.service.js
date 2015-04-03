'use strict';

// angular.module('blogsApp')
//   .factory('Register', function () {
//     // Service logic
//     // ...

//     var meaningOfLife = 42;

//     // Public API here
//     return {
//       someMethod: function () {
//         return meaningOfLife;
//       }
//     };
//   });


 angular.module('blogsApp')
      .factory('Register', ['$http', function($http){
       var api = {


                    // $scope.posts = Register.register($scope);

             register : function(scope) {
                        console.log("register1");

              $http.post('/api/users', scope.user).success(function(posts) {
              scope.user = [];
                        console.log("register2");

          });
        }
     }
      
      return api
    }])