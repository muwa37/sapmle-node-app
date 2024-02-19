const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

module.export = mongoose.model('User', userSchema);
