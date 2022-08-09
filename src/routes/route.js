const { application } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const app = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})


app.get('/missingNumberArray',function(req,res){
let array=[1,2,4,6,7,9]

//solution 1 way
missingNumber=[]
for (i=1 ; i<array.length ; i++){
    if(array.indexOf(i) === -1){    //
        missingNumber.push(i)
        res.send ( {data:missingNumber} )
    }
}

//solution 2 way
let total=0
for(var i in array){
total=total+arr[i]
}
  
 let lastNum=array.pop()
 let consecutivSum = lastNum* (lastNum +1) / 2
 let missingNumber = consecutivSum - total

    res.send({data:missingNumber})

})



app.get('',function(req,res){

  let array=[32,34,35,37,38,39]
   let total=0
   for(var i in array){
   total=total+array[i]
   }
     
    let 



})
module.exports = router;
// adding this comment for no reason