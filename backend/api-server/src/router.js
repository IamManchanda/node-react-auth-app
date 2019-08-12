const passport = require("passport");

const { signup, signin } = require("./controllers/auth")
const passportService = require("./services/passport");

const passportAuth = (type) => passport.authenticate(type, { session: false });
const requireAuth = passportAuth("jwt");
const requireSignin = passportAuth("local");;

const router = (app) => {
  app.get("/", requireAuth, function handleHomeRouteGET(request, response) {
    response.send({ hi: "there" });
  })
  app.post("/signin", requireSignin, signin)
  app.post("/signup", signup)
};

module.exports = router;