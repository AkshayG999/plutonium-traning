const mongoose=require('mongoose')


const authorSchema= new mongoose.Schema({
    author_id:Number,
    author_Name:String,
    age:Number,
    address:String,


} ,  { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)