 var app=angular.module('LokalTantra')
    .controller('Header', function($scope) {
      
    });

    app.factory("Item", function() {

  var items = [];
  var imagePath1 = 'a.jpg';
  var imagePath2 = 'b.jpg';
  var imagePath3 = 'c.jpg';


  for (var i=0; i<50; i++) {
    items.push({ face: imagePath1, headline: "Children taken into care to be fast-tracked into permanent adoption",
     name: "Aman Kumar", location:"Amritsar,Punjab", description: "Education Secretary describes new strategy as a ‘watershed moment,’ but plan faces strong opposition from social workers" });
    items.push({ face: imagePath2, headline: "Police captain supports claims that family was tormented by 200 demons", 
    name: "John Gill", location:"New Delhi", description: "Latoya Ammons, who is a mother of three, told authorities that demonic spirits caused her 9-year-old son to walk backwards on a hospital ceiling" });
    items.push({ face: imagePath3, headline: "Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee", 
    name: "Jose Dsouza", location:"Shivpuri, MP", description: "Chairman of the Justice for Families group says the legal system is stacked heavily against individuals and in favour of local authorities" });  
    items.push({ face: imagePath3, headline: "Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee", 
    name: "Jose Dsouza", location:"Noida, UP", description: "Chairman of the Justice for Families group says the legal system is stacked heavily against individuals and in favour of local authorities" });  

}

  return {
    get: function(offset, limit) {
      return items.slice(offset, offset+limit);
    },
    total: function() {
      return items.length;
    }
  };
});

app.controller("PaginationCtrl", function($scope, Item) {

  $scope.itemsPerPage = 3;
  $scope.currentPage = 0;
  $scope.total = Item.total();
  $scope.pagedItems = Item.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage);

  $scope.loadMore = function() {
    $scope.currentPage++;
    var newItems = Item.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage);
    $scope.pagedItems = $scope.pagedItems.concat(newItems);
  };

  $scope.nextPageDisabledClass = function() {
    return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.total/$scope.itemsPerPage);
  };

});

app.controller("RightPaginationCtrl", function($scope, Item) {
  console.log('hello');
  $scope.itemsPerPage = 3;
  $scope.currentPage = 0;
  $scope.total = Item.total();
  $scope.pagedItems = Item.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage);

  $scope.loadMore = function() {
    $scope.currentPage++;
    var newItems = Item.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage);
    $scope.pagedItems = newItems;
  };

  $scope.nextPageDisabledClass = function() {
    return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.total/$scope.itemsPerPage);
  };

});

    
