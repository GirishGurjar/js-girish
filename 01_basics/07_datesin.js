let myDate = new Date()

console.log(myDate);


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());


// console.log(typeof myDate);

let myCreateDate = new Date("01-14-2025")

//console.log(myCreateDate.toDateString())
//console.log(myCreateDate.toLocaleDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// 
let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('default',{

  weekday : "long",
   month : "short" 
})
console.log(newDate);
