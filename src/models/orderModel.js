const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
 

const userSchema = new mongoose.Schema( {
    userId:{
        type: ObjectId,
        ref:"HeaderUser1"
    },
    productId:{
        type:ObjectId,
        ref:"product"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:Date
}, { timestamps: true });

module.exports = mongoose.model('HeaderUser1', userSchema) //users



 