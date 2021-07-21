const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  token: {
    type: String
  },
   isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: Number,
  },
  googleId: {
    type: String,
  },
  photo: {
    type: String
  },
  role:{
    type: String
  },
  interest:{
    type:String
  },
  qualification: {
    type: String
  },
  university: {
    type: String
  },
  location: {
    type: String
  },
  otp_expire_at:{
    type: Date,
  },
  mail_expire_at:{
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
