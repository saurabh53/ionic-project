// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
app.service('evalf', function() {
    this.evaluate = function (x , y, z) {
      var a = eval(x)
      var b = eval(y)
      console.log(a)
      console.log(b)
        switch(z)
        {
          case '>':
          if (a>b)
          {
            return true
          }
          else
          {
            return false
          }
          case '<':
          if (a<b)
          {
            return true
          }
          else
          {
            return false
          }
          case '=':
          if (a == b)
          {
            return true
          }
          else
          {
            return false
          }



        }
    }
});
app.controller('MyController', function ($scope, $window) {
 
        });
app.controller('firstController', function ($scope,$ionicPopup, evalf,$location) {
  var sco = 0
  var ab = ['+','-','*','/']
  var rand = ab[Math.floor(Math.random() * ab.length)];
  var rand1 = ab[Math.floor(Math.random() * ab.length)];
   $scope.equation = Math.floor(Math.random() * (10)) +""+ rand+ ""+ Math.floor(Math.random() * (10))
   $scope.equation1 = Math.floor(Math.random() * (10)) +""+ rand1+ ""+ Math.floor(Math.random() * (10))
   $scope.score = sco

   $scope.test = function(symbol)
   {
    console.log("in test");
    var getsyambol = symbol
      var status = evalf.evaluate($scope.equation,$scope.equation1,getsyambol)
      if (status ==  true )
      {
         rand = ab[Math.floor(Math.random() * ab.length)];
         rand1 = ab[Math.floor(Math.random() * ab.length)];
        if ($scope.score < 15)
        {
          
       $scope.score = $scope.score+1
        $scope.equation = Math.floor(Math.random() * (10)) +""+ rand+ ""+ Math.floor(Math.random() * (10))
        $scope.equation1 = Math.floor(Math.random() * (10)) +""+ rand1+ ""+ Math.floor(Math.random() * (10))
         }
         else if ($scope.score < 30) {
        
        
       $scope.score = $scope.score+1
        $scope.equation = Math.floor(Math.random() * (100)) +""+ rand+ ""+ Math.floor(Math.random() * (100))
        $scope.equation1 = Math.floor(Math.random() * (100)) +""+ rand1+ ""+ Math.floor(Math.random() * (100))
         
         }
        else if ($scope.score < 50) {
       $scope.score = $scope.score+1
        $scope.equation = Math.floor(Math.random() * (100)) +""+ rand+ ""+ Math.floor(Math.random() * (100) +""+ rand1+ ""+ Math.floor(Math.random() * (10)))
        $scope.equation1 = Math.floor(Math.random() * (100)) +""+ rand1+ ""+ Math.floor(Math.random() * (100)+""+ rand+ ""+ Math.floor(Math.random() * (10)))
         }
       else {
       $scope.score = $scope.score+1
        $scope.equation = Math.floor(Math.random() * (100)) +""+ rand+ ""+ Math.floor(Math.random() * (100) +""+ rand1+ ""+ Math.floor(Math.random() * (100)))
        $scope.equation1 = Math.floor(Math.random() * (100)) +""+ rand1+ ""+ Math.floor(Math.random() * (100)+""+ rand+ ""+ Math.floor(Math.random() * (100)))
         }
       
       }
       else
       {
         sco = $scope.score 
        var confirmPopup = $ionicPopup.confirm({
     title: 'Your Score',
     template: sco,
     okText: 'Refresh',
     cancelText:'Exit',
   });

   confirmPopup.then(function(res) {
     if(res) {
        window.location = "./first.html";
       console.log('You are sure');
     } else {
      window.location = "./index.html";
       console.log('You are not sure');
     }
   });
 };


       }

    
   
        });
app.controller('SecondController', function ($scope, $window,$ionicPopup) {
  $scope.rowData=[]
  $scope.colData=[]
  $scope.ans =[[,],[,],[,],[,],[,],[,],[,],[,]]
  var ab = ['+','-','*','/']
  var rand = ab[Math.floor(Math.random() * ab.length)];
  $scope.var = rand;
  $scope.score = 0
  var correct = 0
  var  incorrect = 0
  var value = function()
  {
      while($scope.rowData.length < 8){
    var randomnumber = Math.ceil(Math.random()*40)
    if($scope.rowData.indexOf(randomnumber) > -1) continue;
    $scope.rowData[$scope.rowData.length] = randomnumber;
}
  }
  var value1 = function()
  {
      while($scope.colData.length < 8){
    var randomnumber = Math.ceil(Math.random()*40)
    if($scope.colData.indexOf(randomnumber) > -1) continue;
    $scope.colData[$scope.colData.length] = randomnumber;
}
}
  value();
  value1();
   $scope.calculate = function()
   {
    if (rand == '+')
    {
      for (var i = 0; i <= 7; i++) {
         for (var j = 0; j <= 7; j++) {
         if( $scope.rowData[i] +  $scope.colData[j] == $scope.ans[i][j])
            {
              correct++;
            } 
          
      }
      }
      $scope.score = correct - 64;
      var confirmPopup = $ionicPopup.confirm({
     title: 'Your Score',
     template:  $scope.score,
     okText: 'Refresh',
     cancelText:'Exit',
   });

   confirmPopup.then(function(res) {
     if(res) {
        window.location = "./second.html";
       console.log('You are sure');
     } else {
      window.location = "./index.html";
       console.log('You are not sure');
     }
   });
    }
    else  if (rand == '-')
    {
      for (var i = 0; i <= 7; i++) {
         for (var j = 0; j <= 7; j++) {
         if( $scope.rowData[i] -  $scope.colData[j] == $scope.ans[i][j])
            {
              correct++;
            } 
          
      }
      }
      $scope.score = correct - 64;
      var confirmPopup = $ionicPopup.confirm({
     title: 'Your Score',
     template:  $scope.score,
     okText: 'Refresh',
     cancelText:'Exit',
   });

   confirmPopup.then(function(res) {
     if(res) {
        window.location = "./second.html";
       console.log('You are sure');
     } else {
      window.location = "./index.html";
       console.log('You are not sure');
     }
   });
    }
    else  if (rand == '*')
    {
      for (var i = 0; i <= 7; i++) {
         for (var j = 0; j <= 7; j++) {
         
          if( $scope.rowData[i] *  $scope.colData[j] == $scope.ans[i][j])
            {
              correct++;
            } 
           
      }
      }
      $scope.score = correct - 64;
      var confirmPopup = $ionicPopup.confirm({
     title: 'Your Score',
     template:  $scope.score,
     okText: 'Refresh',
     cancelText:'Exit',
   });

   confirmPopup.then(function(res) {
     if(res) {
        window.location = "./second.html";
       console.log('You are sure');
     } else {
      window.location = "./index.html";
       console.log('You are not sure');
     }
   });
    }
    else  if (rand == '/')
    {
      for (var i = 0; i <= 7; i++) {
         for (var j = 0; j <= 7; j++) {
         
          if(Math.ceil( $scope.rowData[i] /  $scope.colData[j]) == $scope.ans[i][j])
            {
              correct++;
            } 
           
      }
      }
      $scope.score = correct - 64;
      var confirmPopup = $ionicPopup.confirm({
     title: 'Your Score',
     template:  $scope.score,
     okText: 'Refresh',
     cancelText:'Exit',
   });

   confirmPopup.then(function(res) {
     if(res) {
        window.location = "./second.html";
       console.log('You are sure');
     } else {
      window.location = "./index.html";
       console.log('You are not sure');
     }
   });
    }
   }
  
 
        });