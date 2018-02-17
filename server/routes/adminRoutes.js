const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {

  app.get('/api/admin/users', (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send('something went wrong');
        next();
      }
      res.json(users);
    })
  })

}