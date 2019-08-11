const jwt = require("jwt-simple");

const User = require("../models/user");

const tokenForUser = (user) =>  {
  const timestamp = new Date().getTime;
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp,
    }, 
    process.env.SECRET,
  );
};

exports.signup = (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(422).send({
      error: "You must provide email and password",
    });
  }

  User.findOne(
    { email }, 
    function handleOnEmailFind(error, existingUser) {
      if (error) return next(error);
      if (existingUser) {
        return response.status(422).send({
          error: "Email is in use",
        });
      }
      
      const user = new User({ email, password });
      user.save(
        function handleOnUserSave(error) {
          if (error) return next(error);
          response.json({ token: tokenForUser(user) });
        },
      );
    },
  );
};
