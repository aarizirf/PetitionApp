var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ideas', function (req, res) {
  res.json([
    {
      text: "asdf"
    }, {
      text: "people"
    }, {
      text: "Hello"
    }, {
      text: "Xyz"
    }
  ]);

  console.log(req);
});

module.exports = router;
