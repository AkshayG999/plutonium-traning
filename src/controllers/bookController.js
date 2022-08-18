const bookModel= require("../models/bookModel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const allBookList= async function (req, res) {
    let allBook= await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBook})
}

 const yearList=async function(req,res){
    let years=req.query.year
let yearBook= await bookModel.find({ year:years }).select({bookName:1,_id:0})
    res.send(yearBook )
 }

   const specificBooks=async function(req,res){
 
 let specificBooks = await bookModel.find(req.query)
 res.send({msg:specificBooks})
   }

   const getPriceName=async function(req,res){
   
    let list = await bookModel.find({"prices.indianPrice": {$in: ["100inr", "200inr","500inr"]}} ).select({bookName:1,_id:0})
    res.send({ msg: list })

   }

   const randomBooks= async function(req, res) {
    let allBooks = await bookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}


module.exports.createbook= createbook
module.exports.allBookList=allBookList
module.exports.yearList= yearList
module.exports.getPriceName=getPriceName  
module.exports.specificBooks=specificBooks 
module.exports.randomBooks=randomBooks 
