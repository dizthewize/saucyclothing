const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      let userInfo;
      if(!user) res.json({message: 'Auth failer, no user found'})

      user.comparePassword(req.body.password, (err, isMatch) => {
        if(err) throw err;
        if(!isMatch) return res.status(400).json({
          message: 'Wrong password'
        })
        userInfo = user;
        let token = user.generateToken(user)
        res.json({
          user:userInfo,
          token:token
        })

      })
    })
  });

  app.post('/api/register', (req, res) => {
    User.findOne({email: req.body.email})
      .then(user => {
        if (user) {
          console.log('User already exists')
        } else {
          let userInfo;
          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email
          });

          newUser.save()
            .then(user => {
              userInfo = user;
              let token = user.generateToken(user)
              res.json({
                user:userInfo,
                token:token
              })
            })
        }
      });
  });

  app.post('/api/logout/:token', (req, res) => {
    req.params.token;
		// req.user.removeToken(req.token).then(() => {
		// 	res.status(200).send();
		// }, (e) => {
		// 	res.status(400).send();
		// });
	});

  app.get('/api/current_user/:token', (req, res) => {
    let userInfo;
    let token = req.body.token || req.query.token;
    if(!token) {
      return res.status(401).json({ message: 'Must pass token'})
    }

    jwt.verify(token, keys.superSecretKey, (err, user) => {
      User.findById({'_id': user._id}, (err, user) => {
        if(err) throw err;
        let token = user.generateToken(userInfo);
        userInfo = user.toJSON();
        res.json({
          user: userInfo,
          token: token
        })
      })
    })
  });
};
