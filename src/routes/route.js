const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
// const bookController= require("../controllers/bookController")
const AuthorController= require("../controllers/bookAuthorController")

 

router.post("/createbook", AuthorController.createbook  )
router.post("/createAuthor", AuthorController.createAuthor)

router.get('/books_authors',AuthorController.books_authors)

// router.get('/allBookList',UserController.allBookList)

// router.get('/yearList',UserController.yearList)

// router.get('/specificBooks',UserController.specificBooks)

// router.get('/getPriceName',UserController.getPriceName)

// router.get('/randomBooks',UserController.randomBooks)
// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;