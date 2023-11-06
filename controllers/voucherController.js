let voucherService = require("../services/voucherService.js");

module.exports = {
  getVoucher: async function (req, res) {
    try {
      let voucher = await voucherService.getVoucher(req.params);
      console.log(req.params)
      res.status(200).send({voucher, message: "Fetched voucher code" });
    } catch (e) {
      res.status(400).send({ message: "Email already read" });
    }
  },
};
