var app=angular.module('LokalTantra')
    .controller('Header', function($scope) {
      
    });

    (function() {
    'use strict';
    app.controller('RatingController', RatingController);
    app.directive('starRating', starRating);

  function RatingController() {
    this.rating1 = 4;
    this.quality=0;
    this.continuity=1;
    this.parks=1;
    this.play=0;
    this.transport=0;
    this.footpath=0;
    this.toilet=0;
    this.cleanliness=0;
    this.streetlight=0;
    this.cc=0;
    this.isReadonly=true;
    
    this.rateFunction = function(rating) {
      console.log('Rating selected: ' + rating);
    };

    this.submit= function(){
      var overallRating={Cleanliness:this.cc,Toilet:this.toilet};
      console.log(overallRating.Toilet+  ""+ overallRating.Cleanliness);
      return overallRating;
    };
  }

  function starRating() {
    return {
      restrict: 'EA',
      template:
        '<ul class="star-rating" ng-class="{readonly: readonly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
        '    <i class="fa fa-star"></i>' + // or &#9733
        '  </li>' +
        '</ul>',
      scope: {
        ratingValue: '=ngModel',
        max: '=?', // optional (default is 5)
        onRatingSelect: '&?',
        readonly: '=?'
      },
      link: function(scope, element, attributes) {
        if (scope.max == undefined) {
          scope.max = 5;
        }
        function updateStars() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.ratingValue
            });
          }
        };
        scope.toggle = function(index) {
          if (scope.readonly == undefined || scope.readonly === false){
            scope.ratingValue = index + 1;
            scope.onRatingSelect({
              rating: index + 1
            });
          }
        };
        scope.$watch('ratingValue', function(oldValue, newValue) {
          if (newValue || newValue === 0) {
            updateStars();
          }
        });
        
      }
    };
  }
})();


app.controller('PerformanceResult' ,function($scope) {
    $scope.items = [
        ['Complaints', '83' ],
        ['Resolved Complaints', '80'],
        ['Avg. Response Time','12min']
        
    ];
});


app.controller('OverallRating' ,function($scope) {
   $scope.quality=4;
   $scope.continuity=3;
   $scope.parks=3;
   $scope.play=4;
   $scope.transport=3;
   $scope.footpath=2;
   $scope.toilet=3;
   $scope.cleanliness=4;
   $scope.streetlight=3;
   $scope.cc=5;
});

app.controller('Profile' ,function($scope) {
    $scope.items = [
        ['Education', 'B.A. Pass' ],
        ['Asset', '12,56,597']
        
    ];
});

app.controller('Contact' ,function($scope) {
    var user='counsellor';
    if(user==='counsellor')
    $scope.flag=false;
    else
    $scope.flag=true;
    $scope.items = [
        ['Phone Number', '9876434234' ],
        ['Email', 'lorem@ipsum.com'],
        ['Address','12, Gandhi Nagar, Sector-2, Delhi']       
    ];

   
});

app.factory("CompList", function() {

  var items = []; 
  var imagePath1 = 'a.jpg';
  var imagePath2 = 'b.jpg';
  var imagePath3 = 'c.jpg';

   items.push({ id:1,face: imagePath1, time:'13mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', likes: 10, dislikes: 11, from: 'Anand Tangri', to: 'Himanshu Kharkwal', images:[{face:'user.png'},{face:'user.png'},{face:'user.png'},{face:'user.png'}], complaint:"Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee because they cant get a fair trial" });
   items.push({ id:2,face: imagePath2, time:'14mins', exactTime:'Wed June 12 2017 05:45:40 GMT-0500', likes: 12, dislikes: 12, from: 'Anil Kumar', to: 'Abhishek Banthia', images:[{face:'user.png'},{face:'user.png'},{face:'user.png'}], complaint:"Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee" });
   items.push({ id:3,face: imagePath3, time:'15mins', exactTime:'Tue May 10 2017 05:45:40 GMT-0500', likes: 13, dislikes: 15, from: 'Amit Singh', to: 'Hemant Sharma', images:[{face:'user.png'},{face:'user.png'},{face:'user.png'}],complaint:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });
   items.push({ id:4,face: imagePath2, time:'16mins', exactTime:'Tue March 10 2017 05:45:40 GMT-0500', likes: 14, dislikes: 18, from: 'Anil Kumar', to: 'Abhishek Banthia', images:[{face:'user.png'},{face:'user.png'},{face:'user.png'}],complaint:"Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee" });
   items.push({ id:5,face: imagePath3, time:'17mins', exactTime:'Tue March 16 2017 05:45:40 GMT-0500', likes: 15, dislikes: 19, from: 'Amit Singh', to: 'Hemant Sharma', images:[{face:'user.png'},{face:'user.png'},{face:'user.png'}],complaint:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });
   items.push({ id:6,face: imagePath2, time:'18mins', exactTime:'Tue Feb 14 05:45:40 GMT-0500', likes: 12, dislikes: 12, from: 'Anil Kumar', to: 'Abhishek Banthia', images:[{face:'user.png'},{face:'user.png'},{face:'user.png'}],complaint:"Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee" });

  return {
    get: function(offset, limit) {
      return items.slice(offset, offset+limit);
    },
    total: function() {
      return items.length;
    },
    likes: function(id){
        var result = items.filter(function(item) {return item.id===id;});
        var a = result.map(function(a) {return a.likes;});
        console.log(a);
        return a[0];
    },
    dislikes: function(id){
        var result = items.filter(function(item) {return item.id===id;});
        var a = result.map(function(a) {return a.dislikes;});
        console.log(a);
        return a[0];
    },
    
    insert: function(id,face,time,from,to,exactTime,likes) {
        console.log(id);
      items.push({id:id,face:face,time:time,from:from,to:to,exactTime:exactTime,likes:likes});
      console.log('success');
    }
  };
});

app.factory("CommentList", function() {

  var items = [];
  var imagePath1 = 'a.jpg';
  var imagePath2 = 'b.jpg';
  var imagePath3 = 'c.jpg';


  for (var i=0; i<50; i++) {
    items.push({compId:1, id:1, face: imagePath1, time:'6mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Anand Tangri', likes:2, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee because they cant get a fair trial" });
    items.push({compId:2, id:2, face: imagePath2, time:'7mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Anil Kumar', likes:3, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse to flee" });
    items.push({compId:3, id:3, face: imagePath3, time:'8mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Amit Singh', likes:4, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });
    items.push({compId:2, id:4, face: imagePath2, time:'9mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Anil Joshi', likes:5, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });
    items.push({compId:1, id:5, face: imagePath1, time:'10mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Abhi Kumar', likes:6, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });
    items.push({compId:2, id:6, face: imagePath2, time:'11mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Rachit Kansal', likes:7, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });
    items.push({compId:4, id:7, face: imagePath3, time:'12mins', exactTime:'Tue June 15 2017 05:45:40 GMT-0500', from: 'Amit Singh', likes:8, comment:"Liberal Democrat MP John Hemming tells parents suspected of child abuse " });   
}

  return {
    get: function(offset, limit) {
      return items.slice(offset, offset+limit).reverse();
    },
    total: function() {
      return items.length;
    },
    likes: function(id){
        var result = items.filter(function(item) {return item.id===id;});
        var a = result.map(function(a) {return a.likes;});
        console.log(a);
        return a[0];
    }
  };
});

app.controller('Complaints' ,['$scope','CompList','$mdDialog','$timeout',function($scope,CompList,$mdDialog,$timeout) {
    $scope.select='';
    $scope.canedit=function(id){
        if (id===1)
        return true; 
        else 
        return false;
    };

    $scope.images=[{face:'user.png'},{face:'user.png'},{face:'user.png'}];
    
    $scope.options = ['Latest First', 'Most Important First' , 'Length'    ];
    $scope.itemsPerPageComp = 5;
    $scope.currentPage = 0;
    $scope.totalComp = CompList.total();
    $scope.pagedItems = CompList.get($scope.currentPage*$scope.itemsPerPageComp, $scope.itemsPerPageComp);

  $scope.loadMoreComplaints = function() {
    $scope.currentPage++;
    var newItems = CompList.get($scope.currentPage*$scope.itemsPerPageComp, $scope.itemsPerPageComp);
    $scope.pagedItems = $scope.pagedItems.concat(newItems);
  };

  $scope.nextPageDisabledClassComp = function() {
    return $scope.currentPage === $scope.pageCountComp()-1 ? "disabled" : "";
  };

  $scope.pageCountComp = function() {
    return Math.ceil($scope.totalComp/$scope.itemsPerPageComp);
  };

  $scope.updateSelection = function() {
    console.log($scope.select);
};

$scope.report=function(id){
  $scope.reportAbuse='';
  console.log($scope.reportAbuse);
  console.log(id);
}

$scope.newComplaint=function(){
var insert=CompList.insert(10,'c.jpg','1min','Aman Kumar','Zubeen Ali','',12);
$timeout(function () {
    
  
}, 1000);}
}]);






app.controller('Comment' ,function($scope,CommentList) {
    
   
    $scope.itemsPerPageComment = 3;
    $scope.currentPage = 0;
    $scope.totalComment = CommentList.total();
    $scope.pagedComment = CommentList.get($scope.currentPage*$scope.itemsPerPageComment, $scope.itemsPerPageComment);
   

  $scope.loadMoreComments = function() {
    $scope.currentPage++;
    var newComments = CommentList.get($scope.currentPage*$scope.itemsPerPageComment, $scope.itemsPerPageComment);
    $scope.pagedComment = newComments.concat($scope.pagedComment);
  };

  $scope.nextPageDisabledClassComment = function() {
    return $scope.currentPage === $scope.pageCountComment()-1 ? "disabled" : "";
  };

  $scope.pageCountComment = function() {
    return Math.ceil($scope.totalComment/$scope.itemsPerPageComment);
  };
  $scope.newComment = function(compId,keyEvent) {
     if (keyEvent.which === 13){
       console.log($scope.newCommentText);
       console.log(compId);
       document.getElementById("newComment").value = "";
    }
   };
 
});

app.controller('ComplaintLikes',function($scope,CompList){
     $scope.hasLiked = false;
     
    $scope.likeClick = function (id) {
        console.log(id);
    
        if (!$scope.hasLiked) {
            $scope.hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount=CompList.likes(id);
            $scope.likeCount +=1;
        

        } else {
            $scope.hasLiked = false;
            $scope.liked = 'Like';
            console.log($scope.liked);
            $scope.likeCount -= 1;
        }
    };

    
});


app.controller('ComplaintDislikes',function($scope,CompList){
     $scope.hasDisliked = false;
     
    $scope.dislikeClick = function (id) {
        console.log(id);
    
        if (!$scope.hasDisliked) {
            $scope.hasDisliked = true;
            $scope.disliked = 'Dislike';
            $scope.dislikeCount=CompList.dislikes(id);
            $scope.dislikeCount +=1;
        

        } else {
            $scope.hasDisliked = false;
            $scope.disliked = 'Dislike';
            console.log($scope.disliked);
            $scope.dislikeCount -= 1;
        }
    };
});

app.controller('CommentLikes',function($scope,CommentList){
     $scope.hasLiked = false;
     
    $scope.likeClick = function (id) {
        console.log(id);
    
        if (!$scope.hasLiked) {
            $scope.hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount=CommentList.likes(id);
            $scope.likeCount +=1;
        

        } else {
            $scope.hasLiked = false;
            $scope.liked = 'Like';
            console.log($scope.liked);
            $scope.likeCount -= 1;
        }
    };
});



app.controller('Reviews' ,function($scope,CompList,$mdDialog) {
    $scope.select='';
    $scope.canedit=function(id){
        if (id===1)
        return true;
        else
        return false;
    };

    $scope.images=[{face:'user.png'},{face:'user.png'},{face:'user.png'}];

    $scope.options = ['Latest First', 'Most Important First' , 'Length'    ];
    $scope.itemsPerPageComp = 5;
    $scope.currentPage = 0;
    $scope.totalComp = CompList.total();
    $scope.pagedItems = CompList.get($scope.currentPage*$scope.itemsPerPageComp, $scope.itemsPerPageComp);

  $scope.loadMoreComplaints = function() {
    $scope.currentPage++;
    var newItems = CompList.get($scope.currentPage*$scope.itemsPerPageComp, $scope.itemsPerPageComp);
    $scope.pagedItems = $scope.pagedItems.concat(newItems);
  };

  $scope.nextPageDisabledClassComp = function() {
    return $scope.currentPage === $scope.pageCountComp()-1 ? "disabled" : "";
  };

  $scope.pageCountComp = function() {
    return Math.ceil($scope.totalComp/$scope.itemsPerPageComp);
  };

  $scope.updateSelection = function() {
    console.log($scope.select);
};

$scope.report=function(id){
  $scope.reportAbuse='';
  console.log($scope.reportAbuse);
  console.log(id);
}

});

app.controller('ReviewComment' ,function($scope,CommentList) {


    $scope.itemsPerPageComment = 3;
    $scope.currentPage = 0;

    $scope.totalComment = CommentList.total();
    $scope.pagedComment = CommentList.get($scope.currentPage*$scope.itemsPerPageComment, $scope.itemsPerPageComment);


  $scope.loadMoreComments = function() {
    $scope.currentPage++;
    var newComments = CommentList.get($scope.currentPage*$scope.itemsPerPageComment, $scope.itemsPerPageComment);
    $scope.pagedComment = newComments.concat($scope.pagedComment);
  };

  $scope.nextPageDisabledClassComment = function() {
    return $scope.currentPage === $scope.pageCountComment()-1 ? "disabled" : "";
  };

  $scope.pageCountComment = function() {
    return Math.ceil($scope.totalComment/$scope.itemsPerPageComment);
  };

});


app.controller('ReviewLikes',function($scope,CompList){
     $scope.hasLiked = false;

    $scope.likeClick = function (id) {
        console.log(id);

        if (!$scope.hasLiked) {
            $scope.hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount=CompList.likes(id);
            $scope.likeCount +=1;


        } else {
            $scope.hasLiked = false;
            $scope.liked = 'Like';
            console.log($scope.liked);
            $scope.likeCount -= 1;
        }
    };
});

app.controller('ReviewDislikes',function($scope,CompList){
     $scope.hasDisliked = false;

    $scope.dislikeClick = function (id) {
        console.log(id);

        if (!$scope.hasDisliked) {
            $scope.hasDisliked = true;
            $scope.disliked = 'Dislike';
            $scope.dislikeCount=CompList.dislikes(id);
            $scope.dislikeCount +=1;


        } else {
            $scope.hasDisliked = false;
            $scope.disliked = 'Dislike';
            console.log($scope.disliked);
            $scope.dislikeCount -= 1;
        }
    };
});

app.controller('ReviewCommentLikes',function($scope,CommentList){
     $scope.hasLiked = false;

    $scope.likeClick = function (id) {
        console.log(id);

        if (!$scope.hasLiked) {
            $scope.hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount=CommentList.likes(id);
            $scope.likeCount +=1;


        } else {
            $scope.hasLiked = false;
            $scope.liked = 'Like';
            console.log($scope.liked);
            $scope.likeCount -= 1;
        }
    };
});



app.controller('Blogs' ,function($scope,CompList,$mdDialog) {
    $scope.select='';
    $scope.canedit=function(id){
        if (id===1)
        return true;
        else
        return false;
    };

    $scope.images=[{face:'user.png'},{face:'user.png'},{face:'user.png'}];

    $scope.options = ['Latest First', 'Most Important First' , 'Length'    ];
    $scope.itemsPerPageComp = 5;
    $scope.currentPage = 0;
    $scope.totalComp = CompList.total();
    $scope.pagedItems = CompList.get($scope.currentPage*$scope.itemsPerPageComp, $scope.itemsPerPageComp);

  $scope.loadMoreComplaints = function() {
    $scope.currentPage++;
    var newItems = CompList.get($scope.currentPage*$scope.itemsPerPageComp, $scope.itemsPerPageComp);
    $scope.pagedItems = $scope.pagedItems.concat(newItems);
  };

  $scope.nextPageDisabledClassComp = function() {
    return $scope.currentPage === $scope.pageCountComp()-1 ? "disabled" : "";
  };

  $scope.pageCountComp = function() {
    return Math.ceil($scope.totalComp/$scope.itemsPerPageComp);
  };

  $scope.updateSelection = function() {
    console.log($scope.select);
};

$scope.report=function(id){
  $scope.reportAbuse='';
  console.log($scope.reportAbuse);
  console.log(id);
}

});

app.controller('BlogComment' ,function($scope,CommentList) {


    $scope.itemsPerPageComment = 3;
    $scope.currentPage = 0;

    $scope.totalComment = CommentList.total();
    $scope.pagedComment = CommentList.get($scope.currentPage*$scope.itemsPerPageComment, $scope.itemsPerPageComment);


  $scope.loadMoreComments = function() {
    $scope.currentPage++;
    var newComments = CommentList.get($scope.currentPage*$scope.itemsPerPageComment, $scope.itemsPerPageComment);
    $scope.pagedComment = newComments.concat($scope.pagedComment);
  };

  $scope.nextPageDisabledClassComment = function() {
    return $scope.currentPage === $scope.pageCountComment()-1 ? "disabled" : "";
  };

  $scope.pageCountComment = function() {
    return Math.ceil($scope.totalComment/$scope.itemsPerPageComment);
  };

});


app.controller('BlogLikes',function($scope,CompList){
     $scope.hasLiked = false;

    $scope.likeClick = function (id) {
        console.log(id);

        if (!$scope.hasLiked) {
            $scope.hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount=CompList.likes(id);
            $scope.likeCount +=1;


        } else {
            $scope.hasLiked = false;
            $scope.liked = 'Like';
            console.log($scope.liked);
            $scope.likeCount -= 1;
        }
    };
});

app.controller('BlogDislikes',function($scope,CompList){
     $scope.hasDisliked = false;

    $scope.dislikeClick = function (id) {
        console.log(id);

        if (!$scope.hasDisliked) {
            $scope.hasDisliked = true;
            $scope.disliked = 'Dislike';
            $scope.dislikeCount=CompList.dislikes(id);
            $scope.dislikeCount +=1;


        } else {
            $scope.hasDisliked = false;
            $scope.disliked = 'Dislike';
            console.log($scope.disliked);
            $scope.dislikeCount -= 1;
        }
    };
});

app.controller('BlogCommentLikes',function($scope,CommentList){
     $scope.hasLiked = false;

    $scope.likeClick = function (id) {
        console.log(id);

        if (!$scope.hasLiked) {
            $scope.hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount=CommentList.likes(id);
            $scope.likeCount +=1;


        } else {
            $scope.hasLiked = false;
            $scope.liked = 'Like';
            console.log($scope.liked);
            $scope.likeCount -= 1;
        }
    };
});




app.controller('MyCtrl', function($scope) {


  this.address = "New Delhi";
  
  $scope.getCurrentLocation = function(){
     $scope.pos = this.getPosition();
     console.log($scope.pos.lat(),$scope.pos.lng());

}

});





