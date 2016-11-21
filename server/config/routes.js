var session = require('./../controllers/session.js');
var question = require('./../controllers/question.js')

// console.log('routes.js is requiring session', session)
module.exports = function(app){
  app.post('/enter', function(req, res){
    session.enter(req, res);
  })
  app.get('/check', function(req, res){
    session.check(req, res);
  })
  app.get('/logout', function(req, res){
    session.logout(req, res);
  })
  app.post('/question/submit', function(req, res){
    question.submit(req, res);
  })
  app.get('/question/all', function(req, res){
    question.findall(req, res);
  })
  app.get('/question/:id', function(req, res){
    question.findone(req, res);
  })
  app.post('/answer/submit/:id', function(req, res){
    question.postAnswer(req, res);
  })
  app.get('/deleteall', function(req, res){
    question.deleteall(req, res);
  })
  app.get('/answers/:id', function(req, res){
    question.addlike(req, res);
  })
}
