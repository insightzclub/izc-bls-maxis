"use strict";
var mongoose = require("mongoose");
var db = require("../db");

var VoucherSchema = new mongoose.Schema({
  code: String,
  brid: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

VoucherSchema.index();
module.exports = db.model("Voucher", VoucherSchema);