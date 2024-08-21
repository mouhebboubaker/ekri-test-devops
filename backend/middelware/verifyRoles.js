
const verifyRoles=(...allowedRoles)=>{
    return (req,res,next)=>{
        console.log("verify role :",req.roles)
        
         
        for (let i=0 ;i<req.roles.length;i++)
        {
            
            if(allowedRoles.includes(req.roles[i]))
               return next()
            
        }
        res.sendStatus(403); //valid token but unauthorized

    }

}
module.exports=verifyRoles