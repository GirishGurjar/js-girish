// Singleton

// object literals

//object.create // constructor method , use singleton

const mySym = Symbol("key1")
 
const JsUser = {
    name : "Girish",
    "full name" : "Girish Gurjar",
    [mySym] : "key1",
    age : 18,
    location : "Delhi",
    email: "g@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//JsUser.email = "Girish@changeobject.com"   //to change the anything in the object
//Object.freeze(JsUser) // to freeze the object for no further changes accepted
//JsUser.email = "girish@gurjar.com"
//console.log(JsUser);


JsUser.greeting = function(){
 console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
 console.log(`Hello JS user, ${this.name}`);  // accessing current objects using "this" keywords
    
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);



