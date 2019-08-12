const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

userSchema.pre(
  "save",
  function encrpytPasswordOnSave(next) {
    const user = this;
    bcrypt.genSalt(
      10,
      function handleSaltGen(error, salt) {
        if (error) return next(error);
        bcrypt.hash(
          user.password, 
          salt,
          null,
          function handleHashGen(error, hash) {
            if (error) return next(error);
            user.password = hash;
            next();
          },
        );
      },
    );
  },
);

userSchema.methods.comparePassword = (
  function comparePassword(candidatePassword, callback) {
    bcrypt.compare(
      candidatePassword, 
      this.password,
      function name(error, isMatch) {
        if (error) return callback(error);
        callback(null, isMatch);
      }
    );
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
