app.controller('user_controller', ['$scope', 'UserFactory', function($scope, UF){
  UF.check(function(data){
    $scope.cur_user = data;
  })

  $scope.enter = function(){
    if(!$scope.newUser || $scope.newUser.name.length < 3){
      alert('Please fill this out correctly or you will die...')
    }else{
      UF.enter($scope.newUser);
    }
  }
}])
