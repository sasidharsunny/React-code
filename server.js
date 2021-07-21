const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require('express-flash');
const session = require('express-session')
const users = require("./routes/api/users");
const cors = require('cors')
const path = require('path')
const cookieSession = require("cookie-session");

const app = express();

require("./models/User.js");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["somesecretsauce"]
  })
);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use(flash());
app.use(session({ secret: 'session secret key',
resave: true,
saveUninitialized: true
 }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,
      useUnifiedTopology: true,
      useFindAndModify: false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport")(passport);
require("./config/passport");

// Routes
app.use("/", users);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
