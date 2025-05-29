const score = 400;
//console.log(score);

const balance = new Number(100)
// console.log(balance);

//console.log(balance.toString().length);

// console.log(balance.toFixed(2))

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))

const otherNumber = 134.8954

 //console.log(otherNumber.toPrecision(4));

// console.log(hundreds.toString().length)


//******************************Math**************************************
//console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.333))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(5.33))
// console.log(Math.min(4,5,2,8))
// console.log(Math.max(4,5,2,8))

// console.log(Math.random());   // gives values btw 0 and 1
// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);
// console.log((Math.floor(Math.random()*10)+1));


const max = 20
const min = 10
console.log(Math.floor(Math.random()* (max - min + 1 ))+ min);  //formula


const upper = 15
const lower = 5
console.log(Math.floor(Math.random()* (upper - lower + 1) ) + min );
