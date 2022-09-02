const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const midd = require('../middlerware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/createWheather",  userController.getWeather)

router.post("/createMemas", userController.createMeme)






module.exports = router;