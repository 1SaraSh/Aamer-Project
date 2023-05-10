const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    Full_Name: {
    type: String,
    required: true
  },
  Phone_Number: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  infoTextarea: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
