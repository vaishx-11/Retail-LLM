const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  csvDocument: {
    data: Buffer,
    contentType: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Auser = mongoose.model('Auser', AuserSchema);
Auser.createIndexes();
module.exports = Auser;
