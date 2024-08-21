const Maison = require("../models/maisonModel");
const mongoose = require("mongoose");

// get all maisons
const getMaisons = async (req, res) => {
  const maisons = await Maison.find({}).sort({ createdAt: -1 });

  res.status(200).json(maisons);
};

// get a single Maison
const getMaison = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Maison" });
  }

  const Maison = await Maison.findById(id);

  if (!Maison) {
    return res.status(404).json({ error: "No such Maison" });
  }

  res.status(200).json(Maison);
};

// create a new Maison
const createMaison = async (req, res) => {
  const {
    titre,
    numero,
    description,
    adresse,
    faculte,
    photos,
    typeDeLocation,
    chambres,
    prix,
    Equipment,
  } = req.body;
  console.log("creat maison",req.body);
  //   let emptyFields = []

  //   if (!title) {
  //     emptyFields.push('title')
  //   }
  //   if (!load) {
  //     emptyFields.push('load')
  //   }
  //   if (!reps) {
  //     emptyFields.push('reps')
  //   }
  //   if (emptyFields.length > 0) {
  //     return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  //   }

  //   // add to the database
  try {
    const maison = await Maison.create({
      titre,
      numero,
      description,
      adresse,
      faculte,
      photos,
      typeDeLocation,
      chambres,
      prix,
      Equipment,
    });
    res.status(200).json(maison);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Maison
const deleteMaison = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Maison" });
  }

  const maison = await Maison.findOneAndDelete({ _id: id });

  if (!maison) {
    return res.status(400).json({ error: "No such Maison" });
  }

  res.status(200).json(maison);
};

// update a Maison
const updateMaison = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Maison" });
  }

  const Maison = await Maison.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!Maison) {
    return res.status(400).json({ error: "No such Maison" });
  }

  res.status(200).json(Maison);
};

module.exports = {
  getMaisons,
  getMaison,
  createMaison,
  deleteMaison,
  updateMaison,
};
