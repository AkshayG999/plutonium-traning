const jwt=require('jsonwebtoken')


const authentication=async function(req,res,next){
    let tokan = req.headers['x-auth-token'];
    if(!tokan) return res.send("Tokan is Required")
    console.log(tokan)
    let decodedToken = jwt.verify(tokan, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

    let paramId=req.params.userId
    let tokenId=decodedToken.userId
    if(paramId!=tokenId)
       return res.send({status:false , msg:"Authorization failed ' User logged is not allowed to the requested users data"})
    next()

}

module.exports.authentication=authentication