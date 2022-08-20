const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
// const bookController= require("../controllers/bookController")
const AuthorController= require("../controllers/bookAuthorController")

 

router.post("/createbook", AuthorController.createbook  )
router.post("/createAuthor", AuthorController.createAuthor)

router.get('/books_authors',AuthorController.books_authors)

router.get('/bookList',AuthorController.bookList)
router.get('/author_updatePrice',AuthorController.author_updatePrice)
router.get('/findBookPrice',AuthorController.findBookPrice)

module.exports = router;