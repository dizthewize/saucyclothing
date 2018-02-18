const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/login', (req, res, next) => {
    passport.authenticate('local')(req,res,next);
  });

  app.post('/api/register', (req, res) => {
    User.findOne({email: req.body.email})
      .then(user => {
        if (user) {
          console.log('User already exists')
        } else {
          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  console.log('New user saved')
                })
                .catch(err => console.log(err))
            });
          });
        }
      });
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
