(function(){
 
'use strict';

angular.module('public')
.service('UserService',UserService);
UserService.$inject = ['$http', 'ApiPath'];
//UserService.$inject=['$http']
function UserService($http,ApiPath){
    var userService=this;
    userService.userDetails={};
   
    
    userService.menuitems=function(){



          console.log("Inside the getItems method service")

          return $http({
          method: 'GET',
          url: (ApiPath + '/menu_items.json')  
          });
     

  };

  
    
  userService.save = function (user) {
        userService.userDetails=user;
         console.log("User Data is Saved--")
         console.log(userService.userDetails);
         //var items=userService.findItem(userDetails.favoriteItem);
        // console.log(items)
  };

   

  
}

})();