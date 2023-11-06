const Voucher = require("../models/codes.js");

module.exports = {
  async getVoucher(params) {
    // console.log(params);
    let findExistingBrid = await Voucher.find({
      brid: params.brid,
    });
    console.log(findExistingBrid)

    if (findExistingBrid.length != 1) {
      let unusedVoucher = await Voucher.find({
        status: { $nin: ["Complete"] },
      });
      if (unusedVoucher.length != 0) {
        let updateVoucherStatus = await Voucher.findOneAndUpdate(
          {
            _id: unusedVoucher[0]._id,
          },
          { status: "Complete", brid: params.brid }
        );

        return unusedVoucher[0];
      } else {
        return "No Codes Found";
      }
    }
    else {
      return findExistingBrid[0]
    }
    //   let unusedVoucher = await Voucher.find({
    //     status: { $nin: ["Complete"] },
    //   });
    //   if (unusedVoucher.length != 0) {
    //     let updateVoucherStatus = await Voucher.findOneAndUpdate(
    //       {
    //         _id: unusedVoucher[0]._id,
    //       },
    //       { status: "Complete" }
    //     );

    //     return unusedVoucher[0];
    //   }
    //    else {
    //     return "No Codes Found"
    //    }
  },
};
