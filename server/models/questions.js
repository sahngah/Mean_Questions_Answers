var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
  question: {type: String, required:true},
  description: {type:String},
  answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

mongoose.model('Question', QuestionSchema);
