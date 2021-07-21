const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(existingUser => {
          if (existingUser) {
            console.log("User already Exist")
            done(null, existingUser);
          } else {
            let userData = new User({
              googleId: profile.id,
              isVerified: true,
              firstname: profile.name.givenName,
              lastname: profile.name.familyName,
              email: profile.emails[0].value,
              photo: profile.photos[0].value.split("?")[0],
              phone: null,
              qualification: null,
              skills: null,
              university: null,
              location: null,
              role: null,
              interest: null
            })
            userData.save().then(user =>{
              done(null, user);
            })
          }
        });
      }
    )
  );
};
