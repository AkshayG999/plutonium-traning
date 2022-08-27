const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const ProductController=require("../controllers/productController")
const OrderController=require("../controllers/orderController")
const middleware=require("../middlewares/commonMiddlewares")
 
 

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
router.post("/createUser",middleware.headersCheck,UserController.createUser )

router.post('/createProduct',ProductController.createProduct)

router.post("/createOrder",middleware.headersCheck,OrderController.createOrder)


 
module.exports = router;