const { signup } = require("./controllers/auth")

const router = (app) => {
  app.post("/signup", signup)
};

module.exports = router;