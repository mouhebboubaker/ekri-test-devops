const mongoose = require("mongoose");
const { Schema } = mongoose;

// creating a schema of the model (the representation of the collection in mongodb)

const schema = new Schema({
  nomPrenom: { type: String, require: true },
  email: { type: String, require: true },
  motDePasse: { type: String, require: true },
  roles: {
    type: [String],
    default: ["Utilisateur"],
  },
  refreshToken: String,
});

// Creating the model that we will represent the collection(table in relation db)
// that will provide to us crud operation

const Utilisateur = mongoose.model("utilisateur", schema);

module.exports = Utilisateur;
