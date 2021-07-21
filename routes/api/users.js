const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const passport = require("passport");
const verifyEmail = require("../../utils/mails")
const { v4: uuidv4 } = require('uuid');
const otpGenerator = require('otp-generator')
const forgetPasswordEmail = require("../../utils/mails")
const soldOutMail = require("../../utils/mails")
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt'); // for authorization check
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const mongoose = require("mongoose");

// Load User model
const User = require("../../models/User");
//Load Internship model
const Internship = require("../../models/Internship");
const { response } = require("express");
const Category = require("../../models/Category")
const Cart = require("../../models/Cart")
const PurchaseHistory = require("../../models/PurchaseHistory")

const JWT_SECRET = require("../../config/keys").JWT_SECRET;
// @route POST register
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      let token = uuidv4();
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        role: req.body.role,
        interest: req.body.interest,
        qualification: req.body.qualification,
        university: req.body.university,
        location: req.body.location,
        token: token,
        otp:null,
        otp_expire_at: null      
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              verifyEmail.verifyEmail(user)
              res.json(user)
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

 // login route
router.post("/login", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user && user.isVerified) {
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {

      // generate a signed token with user id and secret
      const signin_token = jwt.sign({ _id: user._id }, JWT_SECRET);
      // persist the token as 't' in cookie with expiry date
      res.cookie('t', signin_token, { expire: new Date() + 9999 });
      // return response with user and token to frontend client
      
      res.status(200).json({ message: "Login Successful..", signin_token, user });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
  }
  if (!user) {
    res.status(401).json({ error: "User does not exist" });
  } else {
      res.json({
        success: false,
        message: "Account not verified. Please check your mail"
      })
  }
  
});

//Signout route
router.get("/signout", (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
}) 

router.get('/auth/verify/:token', (req, res) => {
  User.findOneAndUpdate({ token: req.params.token}, {$set:{isVerified:true}}, {new: true})
    .then((result) => {
      console.log(result)
      return res.redirect('http://localhost:3000/EmailVerification');     
    })
    .catch(() => {
      return res.status(404).send({
        message: `Your account has not been verified. Please activate your account.`,
      });
    });
  })


  //Get Internships by category
router.get("/internship/category/:category", (req, res) => {
  const{  category } = req.params;
  console.log(" category :", category)
  Internship
    .find({
      category:  category,
    })
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});

router.post("/change-password", (req, res) => {
    const user = req.body;
    User.findOne({ id: user._id })
    .then(async (response) => {
      if (!response) {
        res.json({
          message: "User not found",
        });
      } else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user.new_password, salt);
        //console.log("req.body", req.body.id)
        //console.log("Hashed PAsswoed", hashedPassword )
        User.findByIdAndUpdate(req.body.id,{$set: {password: hashedPassword}}).then((user) => {
          console.log("User_Data", user)
          if(user) {
            res.json({
              message: "Password updated succesfully."
            });
          } else{
            res.json({
              message: "faild to update password."
            });
          }
        });
      }
    });
});

router.post("/forget-password", (req, res) => {
  const currentTime = Date.now();
  User.findOneAndUpdate({ email: req.body.email },{$set: {otp_expire_at: currentTime}}, {new: true})
  .then(async (response) => {
    console.log("Response: ",response)
    if (response.isVerified == true) {
    if (!response) {
      res.json({
        success: false,
        message: "User not found",
      });
    } else {
      response.otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
      await forgetPasswordEmail.forgetPasswordEmail(response)
      User.findByIdAndUpdate(response.id,{$set: {otp: response.otp}}).then((user) => {
        if(user) {
          res.json({
            success: true,
            message: "Email sent succesfully. Please check your mail for password reset instruction"
          });         
        } else {
          res.json({
            success: false,
            message: "Failed to send mail."
          });
        }
      });
    }
  } else {
     res.json({
            success: false,
            message: "Account not verified. Please check your mail."
          });
  }
  });
});
 
router.post("/verify-otp", (req, res) => {    
  User.findOne({ email: req.body.email })
  .then(async (response) => {   
    var startTime = new Date(response.otp_expire_at); 
    var endTime = new Date();
    var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    var resultInMinutes = Math.round(difference / 60000);
    console.log("Db---------------",resultInMinutes)
    if (!response) {
      res.json({
        message: "User not found",
      });
    } else {
        if(response.otp == req.body.otp && resultInMinutes < 10) {
          res.json({
            success: true,
            message: "OTP verified, Now you can change your Password"
          })
        } else {
          res.json({
            success: false,
            message: "OTP Invalid or Expired. Please Resend OTP"
          })
        }
      }
  });
});

 // Update users profile
router.put("/update-profile/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = mongoose.Types.ObjectId(req.params.id);
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update the user with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User profile was updated successfully." });
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: `Error updating the profile with id ${id}`
      });
    });
})

router.get("/user-profile/:id", (req, res) => {
  const{ id } = req.params;
  console.log("JBJBIKJBKBKJ")
  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send({ data});
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
});

// Create a new Internship
router.post("/internship/post", (req, res) => {
  const user = new Internship(req.body);
  user.save((err, internship_post) => {
      if(err) {
          return res.status(400).json({
              err: "something wrong"
          })
      }
      res.json({
        internship_post
      })
  })
})

 // Update a Internship with id
router.put("/internship/update/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Internship.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Internship with id=${id}. Maybe Internship was not found!`
        });
      } else res.send({ message: "Internship was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Internship with id=" + id
      });
    });
})

//Get Internship based on skills and location
router.post("/internship/search", (req, res) => {
  const skillset = new RegExp(req.body.skillset, 'i') ;
  const location = new RegExp(req.body.location, 'i') ;
  const city = new RegExp(req.body.city, 'i') ;
  const state = new RegExp(req.body.state, 'i') ;
  const organization = new RegExp(req.body.organization, 'i');
  const title = new RegExp(req.body.title, 'i') ;
  const job_function = new RegExp(req.body.job_function, 'i') ;
  Internship
    .find({
            skillset: skillset,
            location: location,
            organization: organization,
            title: title,
            job_function: job_function
           
         })
    .then((response) => {
      console.log("Data: ", response)
      res.json(response);
    });  
});

router.post("/find-people", (req, res) => {
  const email = new RegExp(req.body.email, 'i');
  const firstname = new RegExp(req.body.firstname, 'i');
  const lastname = new RegExp(req.body.lastname, 'i');
  User
    .find({ 
            email: email,
            firstname: firstname,
            lastname: lastname
         })
    .then((response) => {
      console.log("Data: ", response)
      res.json(response);
    });  
});

//Internship based on Organization
router.get("/internship/organization/:organization", (req, res) => {
  const{ organization } = req.params;
  Internship
    .find({
      organization: organization,
    })
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});
//Internship based on UserId
router.get("/internship/:id", (req, res) => {
  const{ id } = req.params;
  Internship
    .findById(id)
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});

router.get("/internship/createdAt/:Date1/:Date", (req, res) => {
  const{ Date1 } = req.params;
  const {Date} =req.params;
  console.log("CREATEDDATE: ",Date1)
  Internship.aggregate([
    {
      $addFields: {
        "dateString": { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
      }
    },
    {
      $match: {
        dateString: {
          "$gte":Date1,
          "$lte": Date
        }
      }
    }
  ]).then((response) => {
      res.json(response);
      console.log(response);
    });  
});

router.get("/internship/createdAt/:Date", (req, res) => {
  const{ Date } = req.params;
  console.log("CREATEDDATE: ",Date)
  Internship.aggregate([
    {
      $addFields: {
        "dateString": { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
      }
    },
    {
      $match: {
        dateString: {
          $eq: Date
        }
      }
    }
  ]).then((response) => {
    res.json(response);
    console.log(response);
   });
});
router.get("/internship/fee/:fee", (req, res) => {
  const{ fee } = req.params;
  console.log("fee : ",fee)
  Internship
    .find({
      "fee": {
        "$lte": fee
      }
    })
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});
router.get("/internship/title/:title", (req, res) => {
  const{ title } = req.params;
  console.log("title :",title)
 // Internship.ensureIndex( { title: "text" } )
  Internship
  .find( { 
   // $text: { $search: title }
      title: title,
    }
  ).then((response) => {
      res.json(response);
      console.log(response);
    });  
});
router.get("/internship/industry/:industry", (req, res) => {
  const{  industry } = req.params;
  const industry2 = industry.trim();
  console.log(" industry :", industry2)
  Internship
    .find({
      industry:  industry2,
    })
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});
router.get("/internship/job_function/:job_function", (req, res) => {
  const{  job_function } = req.params;
  console.log(" job_function :", job_function)
  Internship
    .find({
      job_function:  job_function,
    })
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});
router.get("/AllInternships", (req, res) => {
  Internship
   .find()
   .then((response) => {
  res.json(response);
  console.log(response);
   }); 
});

//Google Authentication 
router.get("/auth/test", (req, res) => {
    res.send("Auth Working properly");
  });
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect(`/updateprofile1`);
  }
);

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

//APIs for Caterogy
router.get("/category", (req, res) => { 
   Category    
   .distinct("category")  
   .then((response) => {    
    res.json(response);      
    console.log(response);    
  });  
});

router.get("/getAllCategory", (req, res) => { 
  Category    
  .find()  
  .then((response) => {    
   res.json(response);      
   console.log(response);    
 });  
});
// category id
router.get("/categories/id/:id", (req, res) => {
  const{ id } = req.params;
  Category
  .findById(id)
  .then((response) => {
  res.json(response);
  console.log(response);
  }); 
});
 
 //category
router.get("/categories/:category", (req, res) => {
  const category = new RegExp(req.params.category, 'i');
  Category
  .find({category:category})
  .then((response) => {
  res.json(response);
  console.log(response);
  }); 
});
/*
router.post("/addToCart", (req, res) => {
  const updateData = {
    internships: {
      title: req.body.title,
      organization: req.body.organization,
      fee: req.body.fee
    }
  }
  Cart.findOne({ userId: req.body.userId }).then(user => {
    if (user) {
      let arr = []
      updateData.internships.internshipId = req.body.internshipId
      let updateNewInternShip = arr.concat(user.internships)
      updateNewInternShip.push(updateData.internships)
      const updateOBj = {
        internships: updateNewInternShip
      }
      Cart.findByIdAndUpdate(user._id, updateOBj, { useFindAndModify: false })
      .then((data, err) => {
          if(err) {
            return res.status(400).json({
                err: "something wrong"
            })
          }
          data.internships = updateNewInternShip
          res.json({
            data
          })
      })
    } else {
          updateData.userId = req.body.userId
          updateData.internships.internshipId = req.body.internshipId
          const cart = new Cart(updateData);
          cart.save((err, data) => {
          if(err) {
          return res.status(400).json({
              err: "something wrong"
          })
          }
          res.json({
            data
          })
      })
   }
  })
})
*/
router.post("/addToCart", (req, res) => {
  const cart = new Cart(req.body);
  cart.save((err, data) => {
      if(err) {
          return res.status(400).json({
              err: "something wrong"
          })
      }
      res.json({
        data
      })
  })
})

router.get("/cart/:userId", (req, res) => {
  const{ userId } = req.params;
  Cart
    .find({userId})
    .then((response) => {
      res.json(response);
    });  
});

router.get('/cart/:id/delete', function(req, res){
  Cart.deleteOne({_id: req.params.id}, 
     function(err){
  if(err) res.json(err);
  else    res.json({message: 'Removed one Item'});
  });
});

router.get('/enroll-cource/:userId', (req, res) => {
  const{ userId } = req.params;
  Cart.find({userId: userId}).then(data => {
    if(data){
      for(let i=0; i<data.length; i++){
          console.log(data[i])
          const purchase = new User({
            userId: data[i].userId,
            internshipId: data[i].internshipId,
            image: data[i].image,
            title: data[i].title,
            organization: data[i].organization
          });
          purchase.save((err, data) => {
            if(err) {
              return res.status(400).json({
                  err: "something wrong"
              })
            }
          })
      }
      Cart.deleteMany({userId: userId}, function(err){
          if(err) res.json(err);
      })
      res.json({
        message: "Congrats, Purchased success"
      })
      soldOutMail.soldOutMail('sonu.verman@albenus.com')
    }else{
      return res.status(400).json({
        err: "something wrong"
    })
    }
  })
})

router.get("/my-enrolled-internship/:userId", (req, res) => {
  const{ userId } = req.params;
  PurchaseHistory.find({userId: userId}).then((data, err) => {
  if(err){
    return res.status(400).json({
      err: "something wrong"
  })
  } else{
  PurchaseHistory
    .find({userId})
    .then((response) => {
      res.json(response);
    }); 
  }
  }) 
});

// Get only categories  
router.get("/category", (req, res) => {
  Category
    .distinct("category")
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});

// get only industry
router.get("/industry", (req, res) => {
  Internship
    .distinct("industry")
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});
// get only jobfunction
router.get("/jobfunction", (req, res) => {
  Internship
    .distinct("job_function")
    .then((response) => {
      res.json(response);
      console.log(response);
    });  
});

//Internships based on organization id
router.get("/internship/organizationID/:organizationID", (req, res) => {
  const{ organizationID } = req.params;
  Internship
  .find({organizationID: organizationID })
  .then((response) => {
  res.json(response);
  console.log(response);
  }); 
 });

module.exports = router;


