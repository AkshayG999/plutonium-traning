const authorModel=require('../models/authorModel')
const bookModel= require('../models/bookModel')

const createAuthor=async function(req,res){
    let data=req.body
    console.log(data)
    let authorId=await authorModel.create(data)
    res.send({ data:authorId })
}

// const bookModel= require("../models/bookModel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const books_authors=async function(req,res){
    let id=req.query
    let bookId=await bookModel.find()
    console.log(id)
    res.send({bookId})

}


module.exports.createAuthor= createAuthor
module.exports.createbook= createbook
module.exports.books_authors= books_authors