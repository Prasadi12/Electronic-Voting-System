const { Router } = require("express");
const Admin = require("../models/adminModel");
const User = require("../models/userModel");
// const AuthController = require('../controllers/AuthController');
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const result = await User.create(req.body);
    await result.save();

    res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message, er: "error happens" });
  }
});

router.post("/login", async (req, res) => {
  const ssn = req.body.NIC;
  const password = req.body.password;
  const user = await Admin.findOne({ ssn, password });
  //console.log(user) ;                     
  if (user) {
    if (user.usertype === "admin") {
      res.send({
        msg: true,
        admin: true,
      });
    } else {
      res.send({ msg: true });
    }
  } else {
    res.send({ msg: false });
  }
});

router.get("/register", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
    res.send("hello world");
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.post("/adminregister", async (req, res) => {
  try {
    const result = await Admin.create(req.body);
    await result.save();

    res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      er: "error happens"
    });
  }
});

module.exports = router;
