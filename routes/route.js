const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

//problem no 1
router.get('/movies', function (req, res){
    let movies = ['Don', 'Kammine', 'Shole','Doom','Tarjan','Bahubali']
    res.send(movies)
})

//Problem No 2
router.get('/movies/:indexNumber', function (req, res){
    let arr=['Don', 'Kammine', 'Shole','Doom','Tarjan','Bahubali']
    //  const arrayLenght=arr.length       //array ki lenght find karke "arrayLenght" me dali.
     const moviesIndex=arr[req.params.indexNumber] //
     if(req.params.indexNumber>arr.length)
     {
        //Problem No 3
        res.send("Please Enter Valid Number...")
     }
     res.send(moviesIndex)
    
})

   // Problem No 4
router.get('/films', function(req, res){//(/films--path parameter)
    let films= [ {
        id: 1,
        name: 'The Shining' },
         { id: 2,
       name: 'Incendies' }, 
       {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name:'Finding Nemo'
       }]   
             
    res.send(films)       
     
})

//Problem No 5
router.get("/films/:filmId" ,function(req,res){

let films= [ {
    id: 1,
    name: 'The Shining' },
     { id: 2,
   name: 'Incendies' }, 
   {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name:'Finding Nemo'
   }]

   filmId=req.params.filmId
   for(let i = 0; i < films.length; i++){
    let film = films[i]
    if(film.id == filmId) {

     return res.send(film) 
   }
}
     res.send('Enter Valide ID to Check the film') 

})
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send(studentName)
})

module.exports = router;