const passport = require("passport");

const { signup } = require("./controllers/auth")
const passportService = require("./services/passport");

const requireAuth = passport.authenticate(
  "jwt",
  {
    session: false,
  },
);

const router = (app) => {
  app.get("/", requireAuth, function handleHomeRouteGET(request, response) {
    response.send({ hi: "there" });
  })
  app.post("/signup", signup)
};

module.exports = router;