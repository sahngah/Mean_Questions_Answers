app.factory('UserFactory', function($http, $location){
  var factory = {};
  factory.check = function(cb){
    $http.get('/check').success(function(output){
      if(!output){
        $location.url('/')
      }else{
        cb(output);
      }
    })
  }
  factory.enter = function(user){
    $http.post('/enter', user).success(function(output){
      if(output.status == true){
        $location.url('/dashboard')
      }else{
        alert('something went wrong! please try again!')
      }
    })
  }
  return factory
})
