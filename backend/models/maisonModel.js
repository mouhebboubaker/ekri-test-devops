const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const maisonSchema = new Schema(
  {
    titre: {
      type: String,
      required: false, // Set to true if it's mandatory
    },
    numero: {
      type: String,
      required: false, // Set to true if it's mandatory
    },
    description: {
      type: String,
      required: false, // Set to true if it's mandatory
    },
    adresse: {
      type: String,
      required: false, // Set to true if it's mandatory
    },
    faculte: {
      type: String,
      required: true, // Ensure this matches your requirement
    },
    photos: {
      type: [String], // Assuming photos is an array of URLs or paths
      required: false, // Set to true if it's mandatory
    },
    typeDeLocation: {
      type: String,
      required: true,
    },
    chambres: {
      type: Number, // Updated to Number to match the data type
      required: true,
    },
    prix: {
      type: Number, // Updated to Number to match the data type
      required: false, // Set to true if it's mandatory
    },
    Equipment: {
      type: [String], // Assuming Equipment is an array of strings
      required: false, // Set to true if it's mandatory
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maison", maisonSchema);
