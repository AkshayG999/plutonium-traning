const { application } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const app = express();

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

//    1st problem
app.get('/missingNumberArray-1',function(req,res){     //app.get--  Hit localhost:3002/missingNumberArray-2(app.get )
let array=[1,2,3,4,6,7,8,9]

//solution 1st way
// missingNumber=[]
// for (let i=1 ; i<array.length ; i++){

//     if(array.indexOf(i) === -1){    //

//         missingNumber.push(i)

        
//     }
// }return res.send ( {data:missingNumber} )

//solution 2nd way
let total=0
for(var i in array){
total=total+array[i]
}
  
 let lastNum=array.pop()
 let consecutivSum = lastNum* (lastNum +1) / 2
 let missingNumber = consecutivSum - total

    res.send({data:missingNumber})

})

//2nd problem 

app.get('/missingNumberArray-2',function(req,res){   //app.get--  Hit localhost:3002/missingNumberArray-2(app.get )

    let array=[32,33,34,35,37,38,39]
    let total=0
    let len=array.length
 
    for(var i in array){
    total=total+array[i]
    }
      
     let firstNum=array[0]
     let lastNum=array.pop()
     consecutivSum =  (len + 1)*(firstNum+ lastNum)/2
     missingNumber=consecutivSum - total

     res.send({ data:missingNumber,status:true})

})

app.listen(process.env.PORT || 3002, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
})
module.exports = router;

// adding this comment for no reason