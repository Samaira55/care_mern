const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '853444018591-ki7dbiof84ofgb92dc2f8bpe4mbmm555.apps.googleusercontent.com';
const  GOOGLE_CLIENT_SECRET = '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';


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {

      return done(null, profile);
    
  }
));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});