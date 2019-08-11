const router = (app) => {
  app.get("/", function homeRoute(request, response, next) {
    response.send(["bottle", "cap", "challenge"]);
  });
};

module.exports = router;