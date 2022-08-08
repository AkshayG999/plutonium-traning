const express = require('express');
const { union } = require('lodash');
// const abc = require('../introduction/intro')
const lodash=require('lodash')

const msg= require('../logger/logger')
const day=require('../util/helper')            // module path
const abc= require('../validatore/formatter')


const router = express.Router();
router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    const array=["jan","Feb","March","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    const result=lodash.chunk(array,3)
    console.log(result)


const array2=[1,3,5,7,9,11,13,15,17,19]
const result2=lodash.tail(array2)
console.log(result2)
 
const array3=[1,2,4,5,4,3,7,5]
const result3=lodash.union(array3)
console.log(result3)

const array4=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
const result4=lodash. fromPairs(array4)
console.log(result4)

    
    msg.welcome()    
    day.batch()      //Call Fuction
    day.todayDate()
    abc.hardcode()









    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason