const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post('/creatPublisher', publisherController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getAllBooksDetails", bookController.getAllBooksDetails)

router.put('/booksUpdates',bookController.booksUpdates)

module.exports = router;