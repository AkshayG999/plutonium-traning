
const headersCheck= function ( req, res, next) {
    let freeApp= req.headers.isfreeappuser
    if(!freeApp)
    return res.send("Enter isFreeAppUser Header")
    next()
}

 
module.exports.headersCheck= headersCheck
 
