const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  console.log("verfyjwt");
  const authHeader = req.headers.authorization;
   
   

  if (!authHeader?.startsWith("Bearer")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log(token);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
     
    if (err) return res.sendStatus(401); // server catch invlid credentials
     
    (req.nomPrenom = decoded.utilisateurInfo.nomPrenom),
      (req.email = decoded.utilisateurInfo.email);
    req.roles = decoded.utilisateurInfo.roles;

    console.log("req.nomPrenom",req.nomPrenom)
    console.log("req.email",req.email)
    console.log("req.roles",req.roles)

    next();
  });
};


module.exports = verifyJwt;
 