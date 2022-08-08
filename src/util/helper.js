 let todayDate=function(){

 

let date_ob = new Date();    //new Date()-current date time month,info show karta hai
let date = date_ob.getDate();  //hame sirf date leni hai upper se to isliye .getdate() function liya
let month = date_ob.getMonth() + 1;  //
 
console.log("Today Date" +" " + date + "-" + month )

 }
let batch= function(){
console.log("Plutonium,W3D5,the topic for today is Nodejs module system ")
}



// module.exports.date=date
// module.exports.month=month     //private module to public module.
// module.exports.ts=ts
// module.exports.date_ob=date_ob
module.exports.batch=batch
module.exports.todayDate=todayDate