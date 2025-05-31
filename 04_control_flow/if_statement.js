// if - first control flow

const isUserLoggedIn = true
if (isUserLoggedIn) {


}

//comaritives  --->  < , > , <= , >= , == , != , 

if(2 =="2") {
    console.log("this is correct");
    
};

let temp = 41
if(temp === 50) {
    console.log("this is correct");
    
} else {
    console.log("no its greater than  50");
    
}

// scope related 

const score = 200

if(score > 100) {

    const power = "fly"
    //console.log(`User power ${power}`); can access , it is inside scope 
    
}
//  console.log(`User power ${power}`); // cant access because out of scope , except var keyword , 



const balance = 1000
  
   // console.log("test"), console.log("test2") // not a proper way to write a code 
if(balance < 500) {

    console.log("less than 500");
    
} else if (balance < 750){
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
    
}



// to check two condition at time , using if
 const userLoggedIn = true 
 const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//  if(userLoggedIn && debitcard) {
//     console.log("allow to access");
    
//  }
if(userLoggedIn && debitcard  && loggedInFromEmail || loggedInFromGoogle) {
    console.log("allow to access");
    
 }

 