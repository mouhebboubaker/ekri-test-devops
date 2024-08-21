const jwt = require("jsonwebtoken");
const Utilisateur = require("../models/UtilisateurModel");

const refreshToken = async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401); // lack or invalid creadential code
  const refreshToken = cookies.jwt;


  console.log("verfiy refresh token",refreshToken)
  const utilisateurTrouve = await Utilisateur.findOne({ refreshToken }).exec();
  if (!utilisateurTrouve) return res.sendStatus(401);//invalid token

  //evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(401);

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
    res.json({accessToken})
  });
};

module.exports = refreshToken;
