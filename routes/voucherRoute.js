var express = require('express');
var router = express.Router();
var voucherController = require("../controllers/voucherController.js");

// router.get('/emailTracker/:email/:country', authController.emailTracker)

router.get('/getVoucher/:brid', voucherController.getVoucher)

module.exports.router = router