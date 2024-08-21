
const Utilisateur=require('../models/UtilisateurModel')
const bcrypt = require("bcrypt");

const signUp= async (req, res, next) => {
    try {
      const utilisateur = req.body;
      const duplicate = await Utilisateur.findOne({
        email: utilisateur.email,
      }).exec();
  
      if (duplicate)
        return res.status(409).json({ message: "email existe deja" });
  
      const hashedMdp = await bcrypt.hash(utilisateur.motDePasse, 10);
      const utilisateur1 = new Utilisateur({
        nomPrenom: utilisateur.nomPrenom,
        email: utilisateur.email,
        motDePasse: hashedMdp,
      });
  
      await utilisateur1.save();
      res.status(201).json({
        message: `un nouveau utilisateur ${utilisateur.nomPrenom} est cree avec succe`,
      });
    } catch (err) {
      res.status(500).json({ message: err.message }); //– Internal Server Error
    }
  }

  module.exports=signUp;