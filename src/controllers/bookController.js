const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    //The authorId is present in the request body. If absent send an error message that this detail is required
    //The publisherId is present in the request body. If absent send an error message that this detail is required
    if(req.body.author && req.body.publisher){

    let authorId = req.body.author
    let publisherId=req.body.publisher
     
    let author=await authorModel.find()
    let publisher=await publisherModel.find()

    //If present, make sure the authorId is a valid ObjectId in the author collection.
    // If not then send an error message that the author is not present.
    for (let i=0;i<author.length;i++){
        if(author[i]._id==authorId){

//If present, make sure the publisherId is a valid ObjectId in the publisher collection.
// If not then send an error message that the publisher is not presen

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
//Write a GET api that fetches all the books along with their author details (you have to populate for this)
// as well the publisher details (you have to populate for this) 

const getAllBooksDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate("author").populate('publisher')
    res.send({data: specificBook})

}
    //Add a new boolean attribute in the book schema called isHardCover with a default false value.
    // For the books published by 'Penguin' and 'HarperCollins', update this key to true.
    
const booksUpdates= async function (req,res){
 let publisher=await publisherModel.find({$or:[{name:'Penguin'},{name:'HarperCollins'}]},{_id:1})
 let id = []
 for (let i=0 ; i<publisher.length ; i++){
 id.push(publisher[i]._id)
 }
 let bookStatus= await bookModel.updateMany({publisher:{$in:id}},{ isHardCover:true},{new:true})
 


//For the books written by authors having a rating greater than 3.5, update the books price by 10 
//(For eg if old price for such a book is 50, new will be 60) 

let authorIds=await authorModel.find({rating:{$gt:3.5}},{_id:1})
let authorid=[]
for(let i=0;i<authorIds.length;i++){
    authorid.push(authorIds[i]._id)  
}
    let bookPrice=await bookModel.updateMany({author:{$in:authorid}},{$inc:{price:10}},{new:true})

res.send({bookStatusUpdate:bookStatus,bookPriceUpdate:bookPrice})
}
// module.exports.createBook= createBook
// module.exports.getAllBooksDetails = getAllBooksDetails
module.exports={getAllBooksDetails,createBook,booksUpdates};
