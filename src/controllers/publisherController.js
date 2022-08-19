const publisherModel=require('../models/publisherModel')

const createPublisher=async function(req,res){
let data=req.body
let publisherData=await publisherModel.create(data)
res.send({ data:publisherData})

}

module.exports.createPublisher=createPublisher