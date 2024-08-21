const jwt=require("jsonwebtoken")
const Utilisateur = require("../models/UtilisateurModel");
const bcrypt = require("bcrypt");

const signIn=async (req, res) => {
    const { email, motDePasse } = req.body;
  
    const utilisateurTrouve = await Utilisateur.findOne({ email }).exec();
  
    if (!utilisateurTrouve)
      return res.status(401).json({ message: "email n'existe pas" });
  
    const match = await bcrypt.compare(motDePasse, utilisateurTrouve.motDePasse);
    
    if (match) {
      const accessToken = jwt.sign(
        {
          utilisateurInfo: {
            nomPrenom: utilisateurTrouve.nomPrenom,
            email: utilisateurTrouve.email,
            roles: utilisateurTrouve.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15min" }
      );
  
      const refreshToken = jwt.sign({}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1d",
      });
  
      // saving refresh token to the database , to allow the generation
      // of access token that are responsible for authorization and authentication
  
      utilisateurTrouve.refreshToken = refreshToken;
      const result = await utilisateurTrouve.save();
  
      //Create Secure Cookie with refresh token
      res.cookie("jwt", refreshToken, {
        httpOnly: true, // Prevents JavaScript access to the cookie
        secure: false, // Set to false for local development with HTTP
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: "Strict", // Protects against CSRF attacks
        path: "/", // Cookie is accessible on the entire site
      });
      res.json({ accessToken });
       
    } else {
      res.status(401).json({ message: "mot de passe incorrect" });
    }
  }

  module.exports=signIn;