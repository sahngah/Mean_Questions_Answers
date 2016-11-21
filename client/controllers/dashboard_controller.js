app.controller('dashboard_controller', ['$scope', 'UserFactory', 'question_factory', '$location', '$routeParams' ,function($scope, UF, QF, $location, $routeParams){
  // QF.deleteall(function(data){
  //   $scope.questions = data;
  // })
  UF.check(function(data){
    $scope.cur_user = data;
  })
  QF.getQuestions(function(data){
    $scope.questions = data
  })
  $scope.goback = function(){
    $location.url('/dashboard')
  }
  $scope.submitQuestion = function(){
    if(!$scope.newQuestion || $scope.newQuestion.question.length < 10){
      alert('Hey! The question should be at least 10 characters!');
    }else{
      QF.submitQuestion($scope.newQuestion);
    }
  }
}])
