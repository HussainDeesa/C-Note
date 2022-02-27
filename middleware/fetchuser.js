const jwt= require('jsonwebtoken')
const JWT_SECRET = "Hussainisagoodboy"

const fetchuser=(req,res,next)=>{
    // Get user from jwt token and add id to req
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Pleaser authenticate using valid token"})
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user
        next();
    
    } catch (error) {
        res.status(401).send({error:"Pleaser authenticate using valid token"})
    }
}

module.exports=fetchuser