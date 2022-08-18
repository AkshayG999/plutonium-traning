const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName:String,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type:Number,
        default :2021,
    } ,
    tags: [String],
    totalPages:Number,
    stockAvailable: Boolean

     
}, { timestamps: true });

module.exports = mongoose.model('Book1', bookSchema) //users



// String, Number
// Boolean, Object/json, array