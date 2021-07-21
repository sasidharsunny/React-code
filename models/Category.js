const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({ 
  category:{
   type:String,
  },
  ImageUrl:{
      type:String
  },
  description:{
      type:String
  },
  jobfunction:{
    type:String
  }
},
  { 
    timestamps:true,
}
);

module.exports = Category = mongoose.model("categories", UserSchema);
