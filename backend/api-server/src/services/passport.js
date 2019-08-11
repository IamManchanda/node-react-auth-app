const passport = require("passport");
const User = require("../models/user");
const { Strategy, ExtractJwt } = require("passport-jwt");

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

passport.use(jwtLogin);
