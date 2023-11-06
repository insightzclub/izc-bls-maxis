require("dotenv").config();
const Voucher = require("../models/codes");
const csv = require("csvtojson");
const csvFilePath = "./scripts/test.csv";

async function run() {
  let rows = await csv().fromFile(csvFilePath);
  console.log("Processing rows");
  let x = 0;

  for (let row of rows) {
    // console.log(row["Response Status"])

    row.code = row["Code"];
    row.status = "";
    // row.country = "MY";
    row.brid = "",
    row.createdAt = Date.now();

    console.log("Created row");

    console.log("Inserting to DB");
    await Voucher.create(row);
    x += 1;
    console.log("Inserted to DB");
  }
  console.log("Added", +x, "codes");
  process.exit();
}

run();
