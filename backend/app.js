const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./API/routes/AuthRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const partyRoutes = require("./API/routes/PartyRoutes");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE, async (err) => {
  if (err) throw err;
  console.log("conncted to db");
});

main().catch((err) => console.log("err", err));

async function main() {
  await mongoose.connect(process.env.DATABASE);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", router);
app.use("/api/v1/parties", partyRoutes);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + "not found!" });
});

// app.get("/",(req,res) => {
//     res.send("welcome to API")
// });

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listning to port ${port}`));
