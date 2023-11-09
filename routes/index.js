var express = require("express");
var router = express.Router();

function middleware1(req, res, next) {
  req.customProperty = 100;
  next();
}

function middleware2(req, res, next) {
  console.log(`The value is: ${req.customProperty}`);
  req.customProperty = 600;
  next();
}

function errorHandler(err, req, res, next) {
  if (err) {
    res.send("<h1>There was an error, please try again</h1>");
  }
}

router.use(middleware1);
router.use(middleware2);

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send(`<h1>The value is: ${req.customProperty}</h1>`);
});
router.use(errorHandler);
module.exports = router;
