const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )

})
let person=[
    {
        name:"shubham",
        age:23,
        votingStatus:false
    },
    {
        name:"akshay",
        age:13,
        votingStatus:false
    },
    {
        name:"raksh",
        age:33,
        votingStatus:false
    },
    {
        name:"sham",
        age:53,
        votingStatus:false
    },
    {
        name:"vikas",
        age:10,
        votingStatus:false
    }
    
]


router.get('/votingPersonEligeble',function(req,res){
let personAge = req.query
let givenAge = req.query.age
console.log(personAge)
console.log(givenAge)

for (let i=0; i<person.length;i++){
    if(person[i].age>=givenAge){

       newPerson= person[i].votingStatus=true 
        console.log(newPerson) 

        console.log(person[i])
    }
}  
res.send(person)





})
module.exports = router;