const mongoose = require('mongoose');
const keys = require('../../config/keys');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  role: {
    type: String,
    required: true,
    enum: ['superadmin','admin','user'],
    default: 'user'
  },
  tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
});

userSchema.pre('save', function(next) {
  var user = this;

  if(user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
  
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {

  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) throw cb();
    cb(null, isMatch);
  })
}

userSchema.methods.generateToken = function(user) {
  var user = this;
  var token;
	var u = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    _id: user._id.toString()
  }

	return token = jwt.sign(u, keys.superSecretKey, {
    expiresIn: "10 days"
  })
}

userSchema.methods.toJSON = function() {
	const user = this;
	const userObject = user.toObject();
	const { email, firstName, lastName } = userObject
	return { email, firstName, lastName }
}

mongoose.model('users', userSchema);
