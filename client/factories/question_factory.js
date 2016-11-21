app.factory('question_factory', function($http, $location){
  var factory = {};
  factory.questions = [];
  factory.oneFriend = [];
  factory.deleteall = function(cb){
    $http.get('/deleteall').success(function(output){
      factory.questions = output;
      cb(output);
    })
  }
  factory.getQuestions = function(cb){
    $http.get('/question/all').success(function(output){
      factory.questions = output;
      cb(output);
    })
  }
  factory.submitQuestion = function(question){
    $http.post('/question/submit', question).success(function(){
      $location.url('/dashboard')
    })
  }
  factory.oneQuestion = function(id, cb){
    $http.get('/question/' + id).success(function(output){
      factory.oneFriend = output;
      cb(output);
    })
  }
  factory.submitAnswer = function(answer, id){
    $http.post('/answer/submit/' + id, answer).success(function(output){
      // console.log(output);
      $location.url('/dashboard');
    })
  }
  factory.like = function(id, cb){
    $http.get('/answers/' + id).success(function(output){
      // console.log(output);
      cb(output);
    })
  }
  return factory;
})
