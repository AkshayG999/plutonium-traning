const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const midd = require('../middlerware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end 
router.get("/users/:userId", midd.authentication, userController.getUserData)

router.put("/users/:userId", midd.authentication, userController.updateUser)

router.delete("/users/:userId", midd.authentication, userController.deleteUser)

router.post("/users/:userId", midd.authentication, userController.postMessage)


module.exports = router;