//Primitive datatype

// 7 types : string,number,boolean,Symbol,null,undefined,BigInt
   
const score = 100
const ScoreValue = 100.3   
   
const IsLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//symbol cannot have same key value 
console.log(id === anotherId);

const bigNumber =  123345454589797987

// Reference (Non Primitive types)
  // Array, Objects, Functions


  const heros = ["shaktiman","hemans","superman"] ;
  
  let myObj =  {

    name : "Girish",
    age : 22,

  }

  const myfunction = function(){
console.log("hellow world");
  }

  console.log(typeof outsideTemp);
console.log(typeof myfunction);

  
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) , Heap (Non Primitive)


let myYoutubechanneName = "theLastRunner"
let anotherName = myYoutubechanneName

anotherName = "Girish"

console.log(myYoutubechanneName);
console.log(anotherName);


let user = {
  email : "user@gmail.com",
  upi : "user@upi"
}

let userTwo = user
userTwo.email = "Girish@gmail.com"

console.log(user.email);
console.log(userTwo.email);