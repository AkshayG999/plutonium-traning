const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const UserController= require("../controllers/bookController")

 

router.post("/createbook", UserController.createbook  )

router.get('/allBookList',UserController.allBookList)

router.get('/yearList',UserController.yearList)

router.get('/specificBooks',UserController.specificBooks)

router.get('/getPriceName',UserController.getPriceName)

router.get('/randomBooks',UserController.randomBooks)
// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;