const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

var router = express.Router();

const MONGO_URI = "mongodb://localhost:27017/passport_js";

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.createConnection(MONGO_URI, dbOptions);

const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});

router.use(
  session({
    secret: "veryverystrongsecretkey",
    resave: false,
  })
);
module.exports = router;
