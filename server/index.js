const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
// uncomment keys if using env variables
const keys = require('../config/keys');

const multer     = require('multer');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const options = {
  key: fs.readFileSync(__dirname + '/../ssl-key.pem'),
  cert: fs.readFileSync(__dirname + '/../ssl-cert.pem')
}

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey]
  })
);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./models/Product');

require('./services/passport')(passport);

// require models under here
// import routes
require ('./routes/web')(app);
require ('./routes/authRoutes')(app);
require ('./routes/adminRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3443
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
