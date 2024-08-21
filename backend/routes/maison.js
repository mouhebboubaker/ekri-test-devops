const express = require("express");
const {
  getMaisons,
  getMaison,
  createMaison,
  deleteMaison,
  updateMaison,
} = require("../controllers/maisonController");
const verify = require("../middelware/verifyJwt");
const verifyRoles=require("../middelware/verifyRoles");
const router = express.Router();

// GET all Maisons
router.get("/", getMaisons);

// GET a single Maison
router.get("/:id", getMaison);

// POST a new Maison
router.post("/",verify, verifyRoles("Utilisateur"), createMaison);

// DELETE a Maison
router.delete("/:id", verifyRoles("admin") ,deleteMaison);

// UPDATE a Maison
router.patch("/:id", updateMaison);

module.exports = router;
