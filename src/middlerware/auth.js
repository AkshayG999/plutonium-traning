const jwt = require('jsonwebtoken')


const authentication = async function (req, res, next) {
   
    let tokan = req.headers['x-auth-token'];
    if (!tokan) return res.send("Tokan is Required")
    //___________________________Authintication Check __________________________________________

    let decodedToken = jwt.verify(tokan, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

//_____________________Authorization Check_____________________________________________________

    let paramId = req.params.userId
    let tokenId = decodedToken.userId
    if (paramId != tokenId)
      return res.status(403).send({ status: false, msg: "Authorization failed ' User logged is not allowed to the requested users data" })
    next()
   
}

module.exports.authentication = authentication