const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  // name: {
  //   type: String,
  //   required: true
  // },
  // experience: {
  //   type: String,
  // },
  skillset: {
    type: String,
    required: true
  },
  blog: {
    type: String,
  },
  duration: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
  },
  // discount: {
  //   type: String,
  // },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  // organization: {
  //     type: String,
  // },
  title:{
    type: String,
  },
  industry:{
    type: String,
  },
  job_function:{
    type: String,
  },
  category:{
    type:String,
    ref:"categories"
  },
  Image_Url:{
    type:String
  },
  organizationID:{
    type:String
 },
 organizationEmail:{
   type:String
 }
},

  { 
    timestamps:true,
}
);

module.exports = Internship = mongoose.model("internship_post", UserSchema);
