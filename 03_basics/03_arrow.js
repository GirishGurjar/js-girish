const user = {
    username : "girish",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        
    }
}

// current context : this 
// arrow function ke andar THIS nahi hota hai  - why ?


user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // empty {}  because we are running this keyword in node ,

// // it is global function declare current context , hence it has no context here , try in console.


function demo(){
    let usrname = " giris"
    console.log(this.username);  // undefined
    
}

demo()

//arrow function
const arrow = () => {
    let username = " girish"
    console.log(this);
    
}
//arrow()

//Type for declaring arrow functions
// curly braces me return keyword likhna padega
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }



// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({usrname: "girish"})  // object return using parenthesis only
console.log(addTwo(3,5));

//uses of arrow functions
const myAray = [2,5,4,5,6]

//myNewarray.forEach(() => (3)) // 