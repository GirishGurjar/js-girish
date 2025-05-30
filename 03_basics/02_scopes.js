//let a = 10
//  const b = 20 
//  var c = 30
let a = 300
//{}    ===> SCOPE


// let understand scope {}
if(true) {
let a = 10
 const b = 20 
 var c = 30  // avoid var keyword

 //console.log("Inner a:", a);  // scope 
 
} 

//  console.log("Outer a :",a);
//  console.log(b);
 //console.log(c); // it should not print another value 


 // Nested scope

 function one() {
    const Username = "Girish"
function two () {
    const website = "yt"
    console.log(Username);
    
}

//console.log(website);

 two()
 }

 // one()


 // closure  with if else 

if(true) {
    const username = "girish"
    if (username === " girish") {
        const website = "yt"
        console.log(username + website);
        
        
    }
   // console.log(website);
    
}

//console.log(username);


//***************************  important topic */
// functions declaration type 1 
function addOne(num) { 
    return num + 1
    
}
console.log(addOne(5))


// function declaration type 2 

//addTwo(5)  // hoisting  //function cannot execute before initialization
const addTwo = function(num) {
    return num + 2 
}
// addTwo()  // here i can declared 