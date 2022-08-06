 

let ts= Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
 
console.log("Today Date" +" " + date + "-" + month )
 
let batch= function(){
console.log("Plutonium,W3D5,the topic for today is Nodejs module system ")
}



module.exports.date=date
module.exports.month=month     //private module to public module.
module.exports.ts=ts
module.exports.date_ob=date_ob
module.exports.batch=batch