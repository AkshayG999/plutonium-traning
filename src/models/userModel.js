const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    bookAuthor: String,
    category: String,
    year: String
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema) //books



// String, Number
// Boolean, Object/json, array