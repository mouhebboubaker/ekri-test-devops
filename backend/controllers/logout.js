const Utilisateur =require("../models/UtilisateurModel")

const logout=async (req,res,next)=>{

    console.log("Log out")

    cookies=req.cookies

    if(! cookies?.jwt) return res.sendStatus(204); //No content

    const refreshToken=cookies.jwt;
    console.log("refreshtoken",refreshToken)

    // is refreshToken in db?
    const utilisateurTrouve=await Utilisateur.findOne({refreshToken}).exec();

     if(!utilisateurTrouve){
        res.clearCookie('jwt',{ httpOnly: true, sameSite: 'Strict', secure: false })
        return res.sendStatus(204)
    }

    utilisateurTrouve.refreshToken='';
    await utilisateurTrouve.save();
    res.clearCookie('jwt',{ httpOnly: true, sameSite: 'Strict', secure: false })
    res.sendStatus(204);

    // you should delete access token from localstorage  

}

module.exports=logout