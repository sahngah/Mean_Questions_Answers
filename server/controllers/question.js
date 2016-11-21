var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  submit: function(req, res){
    var question = new Question(req.body);
    question.save(function(err, question){
      res.json(question);
    })
  },
  findall: function(req, res){
    Question.find({}).populate('answer').exec(function(err, data){
      res.json(data);
    })
  },
  findone: function(req, res){
    Question.findOne({_id: req.params.id}).populate('answer').exec(function(err, data){
      res.json(data);
    })
  },
  postAnswer: function(req, res){
    Question.findOne({_id: req.params.id}, function(err, question){
      var answer = new Answer(req.body);
      answer._question = question._id;
      answer.user = req.session.user.name;
      answer.save(function(err){
        question.answer.push(answer);
        question.save(function(err){
          if(err){
            console.log('error posting answer to question');
          }else{
            res.json(question);
          }
        })
      })
    })
  },
  deleteall: function(req, res){
    Question.remove({}, function(err, data){
      res.json(data);
    })
  },
  addlike: function(req, res){
    Answer.findOne({_id: req.params.id}, function(err, data){
      data.like += 1;
      data.save(function(err){
        console.log(err);
        res.json();
      })
    })
  }
}
