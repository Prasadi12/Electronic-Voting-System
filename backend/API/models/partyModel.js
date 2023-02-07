const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required!"],
    },
    img: {
      type: String,
      required: [true, "image is required"],
    },
    partyName: {
      type: String,
      required: [true, "party name is required"],
    },
    votes: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: `${uuid()}`,
    },
  },
  {
    collection: "parties",
  }
);

const Party = mongoose.model("Party", UserSchema);
module.exports = Party;
