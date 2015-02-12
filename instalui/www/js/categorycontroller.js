'use strict';

angular.module('starter')
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
    	
        });
})
    
.controller('ImagesListCtrl', function($scope, Images) {
  var img_id= [];
        Images.query(function(data){
       //$scope.images = data;
		  for (var i = 0; i < data.length; i++) {
		   /* if(data[i].item_id == $stateParams.playlistId){
          img_id.push(data[i]);*/
        }
  
		  });
  	//	$scope.images = img_id;
   //   $scope.playlistId = $stateParams.playlistId;
})
