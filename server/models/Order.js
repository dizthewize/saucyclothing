const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  dateSent: Date
});

mongoose.model('orders', orderSchema);
