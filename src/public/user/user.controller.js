(function(){
 
'use strict';

angular.module('public')
.controller('UserController',UserController);
UserController.$inject=['UserService']
function UserController(UserService){
    var userCtrl=this;
    userCtrl.userData=UserService.userDetails;

    userCtrl.ErrorMessage="";
    
    userCtrl.submit = function () {
     userCtrl.ErrorMessage="";
         console.log(userCtrl.user);
       userCtrl.completed = true;
      this.findFavorite(userCtrl.user.favoriteItemShortName)
      UserService.save(userCtrl.user) ;
     

    };
   


    userCtrl.isUserSignedIn=function(){
        console.log("userCtrl.userData:"+userCtrl.userData)
        console.log("userCtrl.userData.hasOwnProperty('firstname' :"+userCtrl.userData.hasOwnProperty('firstname'))
        if(userCtrl.userData.hasOwnProperty('firstname')){
            return false;
        }else 
            return true;
    } 
   userCtrl.isFavorateFound=function(){


     if(userCtrl.ErrorMessage.trim){
         console.log("Errormessage:"+userCtrl.ErrorMessage)
        return true;
     }esle 
     return false;
     
     
   };
 
    userCtrl.findFavorite= function(favoriteItem){
      var promise =UserService.menuitems()
     
      
    var items= promise.then(
       function(response){
            console.log("Raw Response:",response)
            var items= response.data.menu_items;
             for (var i=0;i<items.length;i++){
                //console.log("items[i].short_name->"+items[i].short_name)
                    if(items[i].short_name.indexOf(favoriteItem) != -1){
                    userCtrl.ErrorMessage="";
                    userCtrl.user.menuItem=items[i]
                    return
                    console.log("userCtrl.ErrorMessage"+userCtrl.ErrorMessage);
                    }else {
                     userCtrl.ErrorMessage="No such menu number exists";
                    }
             }

      },function(error){
        console.log(error);
      });
       
      
     
  };

  
}

})();