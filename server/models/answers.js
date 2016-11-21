var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
  _question: [{type: Schema.Types.ObjectId, ref:'Question'}],
  user: {type:String},
  answer: {type: String, required:true},
  description: {type: String},
  like: {type: Number, default:0}
})

mongoose.model('Answer', AnswerSchema);
