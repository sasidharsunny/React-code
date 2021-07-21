const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PurchaseSchema = new Schema({ 
  userId:{
   type:String,
  },
  internshipId:{
    type: String
  },
  image:{
    type: String
  },
   title:{
     type: String
   },
   organization:{
     type: String
   },
   fee:{
     type: String
   }
});

module.exports = PurchaseHistory = mongoose.model("PurchaseHistory", PurchaseSchema);
