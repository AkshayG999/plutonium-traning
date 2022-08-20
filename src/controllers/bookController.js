const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    if(req.body.author && req.body.publisher){

    let authorId = req.body.author
    let publisherId=req.body.publisher
     
    let author=await authorModel.find()
    let publisher=await publisherModel.find()
    
    for (let i=0;i<author.length;i++){
        if(author[i]._id==authorId){

            for (let j=0;j<author.length;j++){
                if(publisher[j]._id==publisherId){
                    let book= await bookModel.create(req.body)
                    return  res.send(book)
                }
            }return res.send("This publisher not present")
        }        
    } return res.send("This author is not present")
}
        
    res.send("Please enter autherId and Publisher Id")
    
}

const getAllBooksDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate("author").populate('publisher')
    res.send({data: specificBook})

}

const booksUpdates= async function (req,res){

}

// module.exports.createBook= createBook
// module.exports.getAllBooksDetails = getAllBooksDetails
module.exports={getAllBooksDetails,createBook,booksUpdates};
