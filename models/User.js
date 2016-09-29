const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  person: {
    name: String,
    required: true
  }
});

const User = mongoose.model(User, 'userSchema');

module.exports = User;
