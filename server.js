require("dotenv").config();
const axios = require("axios");
const compression = require("compression");
const path = require("path");

var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors");

mongoose.Promise = global.Promise;
mongoose.set("debug", true);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  // console.log(req.query.brid)
  const brid = req.query.brid; // Extract ID from the query parameter
  if (brid) {
    try {
      const response = await axios.get(
        `https://izc-bls-maxis-a1763218f6d2.herokuapp.com/voucher/getVoucher/${req.query.brid}`
      );
      const voucherCode = response.data.voucher.code;
      res.render("index.pug", { voucherCode });
    } catch (error) {
      res.render("index.pug", { voucherCode: "No voucher code found." });
    }
  } else {
    res.render("index.pug", { voucherCode: "No voucher code found." });
  }
});

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.options("*", cors());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 6001;
}
app.listen(port);
app.use(cors({ credentials: true, origin: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var routes = require("./routes/routes").router;

const LoggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${JSON.stringify(req.body)}`);

  next();
};

app.use(LoggerMiddleware);

app.use("/", routes);
