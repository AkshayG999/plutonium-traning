const orderModel= require("../models/orderModel")
const UserModel= require("../models/userModel")
const productModel=require("../models/productModel")
const moment=require('moment')


const createOrder=async function (req,res){
let data=req.body
let userid=data.userId
let productid=data.productId

if(!userid) return res.send({status:false ,msg:"Enter userId field"})
if(!productid) return res.send({status:false, msg:"Enter productId field"})

let validUserId= await UserModel.findById(userid)
 if(!validUserId)  return res.send({status:false, msg:"Enter Valid User ID"})

let validProductId= await productModel.findById(productid)
 if(!validProductId) return res.send({status:false , msg :"Enter valid Product ID"})

 
if(req.headers.isfreeappuser=='true'){
        data.amount=0
        data.isFreeAppUser=req.headers.isfreeappuser
        let date=moment().format('DD/MM/YYYY')
        data.date=date
        let order=await orderModel.create(data)
        return res.send({status:true , data:order})
}
if(validUserId.balance>=validProductId.price){
    await UserModel.findOneAndUpdate({_id:userid},{$set:{balance:validUserId.balance - validProductId.price}})
    data['isFreeAppUser']=req.headers.isfreeappuser
    data['amount']=validProductId.price
    let date=moment().format('DD/MM/YYYY')
    data.date=date
    let order= await orderModel.create(data)
    return res.send({data:order})
}
   res.send({status:false, msg:"Unsufficent Fund ,Please Check Your Balance "})

}



module.exports.createOrder=createOrder