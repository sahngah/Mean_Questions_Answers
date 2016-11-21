app.controller('answer_controller', ['$scope', 'UserFactory', 'question_factory', '$location', '$routeParams' ,function($scope, UF, QF, $location, $routeParams){
  UF.check(function(data){
    $scope.cur_user = data;
  })
  QF.oneQuestion($routeParams.id, function(data){
    $scope.oneQuestion = data;
  })
  $scope.submitAnswer = function(){
    if(!$scope.newAnswer || $scope.newAnswer.answer.length < 5){
      alert('Hey! Your answer should be at least 5 characters!');
    }else{
      QF.submitAnswer($scope.newAnswer, $routeParams.id);
    }
  }
  $scope.like = function(id){
    QF.like(id, function(data){
      QF.oneQuestion($routeParams.id, function(data){
        $scope.oneQuestion = data;
      })
    });
  }
}])
