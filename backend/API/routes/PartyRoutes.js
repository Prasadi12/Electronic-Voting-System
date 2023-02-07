const router = require("express").Router();
const Party = require("../models/partyModel");

router.get("/parties", async (req, res) => {
  const parties = await Party.find({});

  res.send({
    parties: parties,
  });
});

router.post("/parties", async (req, res) => {
  const id = req.body.id;
  const party = await Party.findOne({ id: id }).exec();
  party.votes = party.votes + 1;
  try {
    party.save();
    res.send({
      status: true,
    });
  } catch (e) {
    res.send({
      status: false,
    });
  }
});
router.post("/addparty", async (req, res) => {
  const { name, img, pname } = req.body;

  if (await Party.findOne({ name: name }).exec())
    res.send(401).send({ status: "Error", msg: "party already exsits!" });

  try {
    await Party.create({
      name: name,
      img: img,
      partyName: pname,
    });

    res.status(201).send({
      status: "ok",
      msg: "party has been added!",
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      msg: "Party added failed!",
    });
  }
});

router.get("/getresults", async (req, res) => {
  const votes = await Party.find({});

  res.send({
    votes: votes,
  });
});
module.exports = router;
