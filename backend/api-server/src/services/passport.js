const passport = require("passport");
const User = require("../models/user");
const { Strategy, ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.SECRET,
};

const jwtLogin = new Strategy(
  jwtOptions,
  function handleJwtLoginStrategy(payload, done) {
    User.findById(
      payload.sub,
      function handleFindByIdUser(error, user) {
        if (error) return done(error, false);
        done(null, user || false);
      },
    );
  },
);

const localLogin = new LocalStrategy(
  { usernameField: "email" },
  function handleLocalLogin(email, password, done) {
    User.findOne(
      { email },
      function handleFindUserEmail(error, user) {
        if (error) return done(error);
        if (!user) return done(null, false);
        user.comparePassword(
          password,
          function handleUserComparedPassword(error, isMatch) {
            if (error) return done(error);
            return done(null, isMatch ? user : false);
          },
        );
      }
    );
  },
);

passport.use(jwtLogin);
passport.use(localLogin);
