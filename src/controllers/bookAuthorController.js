const authorModel=require('../models/authorModel')
const bookModel= require('../models/bookModel')

const createAuthor=async function(req,res){
    let data=req.body
    console.log(data)
    let authorData=await authorModel.create(data)
    res.send({ data:authorData })
}

// const bookModel= require("../models/bookModel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const books_authors=async function(req,res){
    let id=req.query.author_id
    let bookId=await bookModel.find({author_id:id})
     
    res.send({data:bookId})

}

const bookList= async function(req,res){
    let authorId= await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1 , _id:0})
    let id=authorId[0].author_id
    
    let bookName=await bookModel.find({author_id:id}).select({_id:0 , name:1})
    console.log(bookName)
    res.send({ data:bookName})
}

const author_updatePrice= async function (req,res){
    let author=await bookModel.findOneAndUpdate({name: "Two states"},{price:100},{new:true} )
    let id=author.author_id
    
    let authorName=  await authorModel.find({author_id:id}).select({_id:0 ,author_name:1 })
    res.send({authorName,author })
}

const findBookPrice=async function (req,res){
    let bookId= await bookModel.find({price:{$gte:50 , $lte:100}}).select({author_id:1, _id:0})
   let author= []
    for(let i=0;i<bookId.length;i++){
        let id =bookId[i].author_id 
      let name=await authorModel.find({author_id:id}).select({_id:0 , author_name:1})
      author.push(name)
      console.log(author)
    } 
       
    return res.send({data:author})
    
    


     
 
}

module.exports.createAuthor= createAuthor
module.exports.createbook= createbook
module.exports.books_authors= books_authors
module.exports.bookList=bookList
module.exports.author_updatePrice=author_updatePrice
module.exports.findBookPrice=findBookPrice
