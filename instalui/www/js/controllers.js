angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
/*
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Percusión', id: 1 },
    { title: 'Viento', id: 2 },
    { title: 'Cuerda', id: 3 },
    { title: 'Teclado', id: 4 },
    /*{ title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
*/

    .controller('CategoryListCtrl', function($location, $scope, Category) {
        Category.query(function(data){
            $scope.categories = data;
             
        });

    })

.controller('ItemListCtrl', function($scope, $stateParams, Items) {
  var item_id = [];
        Items.query(function(data){
      for (var i = 0; i < data.length; i++) {
        if(data[i].category_id == $stateParams.playlistId){
          item_id.push(data[i]);
          
        }
      };
      $scope.items = item_id;
      $scope.playlistId = $stateParams.playlistId;
      //console.log(item_id);
        });
})
    
.controller('ImagesListCtrl', function($location, $scope, $stateParams, Imagenes) {
  var img_id= [];
        Imagenes.query(function(data){
       //$scope.images = data;
      for (var i = 0; i < data.length; i++) {
       if(data[i].item_id == $stateParams.imageId){
          img_id.push(data[i]);
        }
      };
   
    $scope.imagenes = img_id;
    //console.log(img_id);

   // $scope.imageId = $stateParams.imageId;

});
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
