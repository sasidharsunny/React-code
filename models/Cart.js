const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CartSchema = new Schema({ 
  userId:{
   type:String,
  },
  internshipId:{
    type: String
  },
  Image_Url:{
    type: String
  },
   title:{
     type: String
   },
   organization:{
     type: String
   },
   organizationEmail:{
     type: String
   },
   fee:{
     type: String
   }
});

module.exports = Cart = mongoose.model("Cart", CartSchema);
