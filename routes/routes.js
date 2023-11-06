var express = require("express");
var router = express.Router();

// router.get("/", function (req, res) {
//   // #swagger.description = 'Redirect to InsightzClub Home'

//   res.redirect("https://www.insightzclub.com");
// });

router.get("/ping", function (req, res) {
  // #swagger.description = 'Ping for checking status'

  res.status(200).send({ message: "Success" });
});

// Common
router.use("/voucher", require("./voucherRoute").router);

module.exports.router = router;
