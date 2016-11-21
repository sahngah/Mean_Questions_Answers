var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  enter: function(req, res){
      User.findOne({name: req.body.name}, function(err, user){
        if(!user){
          var user = new User(req.body);
          user.save(function(err){
            if(err){
              res.json({status: false});
            }
            else{
              req.session.user = user;
              // console.log('in session.js', req.session.user);
              req.session.save();
              res.json({status: true});
            }
          })
        }else{
          req.session.user = user;
          // console.log('in session.js', req.session.user);
          req.session.save();
          res.json({status: true});
        }
    })
  },
  check: function(req, res){
    if(!req.session.user){
      res.send(null);
    }
    else{
      res.json(req.session.user);
    }
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/');
  }
}
