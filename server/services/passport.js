const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../../config/keys');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user);
      });
  });

  passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    // Match user
    User.findOne({
      email:email
    }).then(user => {
      if (!user) {
        return done(null, false);
      }

      // Check if hash and password match one another
      // const result = bcrypt.compareSync(password, user.password);
      // console.log(result);

     // Match password
      bcrypt.compare(password, user.password, (err, res) => {
        if(err) throw err;
        if (res === true) {
          return done(null, user);
        } else {
          console.log('It did not work');
          return done(null, false);
        }
      })
    })
  }));
};
