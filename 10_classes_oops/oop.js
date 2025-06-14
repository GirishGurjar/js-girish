//object literals 

// const  user = {

//     username: "girish",
//     loginCount : 9,
//     signedIn : true,

//     getUserDetails : function(){
//        // console.log("got user details from db");
//        // console.log(`username : ${this.username}`);
//         console.log(this);
        

//     }


// }

// console.log(user.username);
// console.log(user.getUserDetails);



const  user2 = {

    username: "girish",
    loginCount : 9,
    signedIn : true,

    getUserDetails : function(){
       // console.log("got user details from db");
       // console.log(`username : ${this.username}`);
       // console.log(this);
        

    }


}

// console.log(user.username);
// console.log(user.getUserDetails);




//constructor

// const promisOne = new Promise()
// const promisOne = new Date()

function User(username, loginCount, isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this;
}

const user1 = new User("girish", 9, true);
const user3 = new User("girish", 7, true);

console.log(user1);
console.log(user3);