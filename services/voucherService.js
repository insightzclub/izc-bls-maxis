let voucherDao = require("../daos/voucherDao.js");
// let emailService = require("./emailService");

module.exports = {
  async getVoucher(params) {
    return await voucherDao.getVoucher(params);
  },
};
