const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./router");
const app = express();

mongoose.connect("mongodb://localhost:auth/auth", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.use(morgan("combined"));
app.use(cors());
app.use(
  bodyParser.json({
    type: "*/*",
  }),
);
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);
