//const tinderUser = new Object()
const tinderUser = {}   // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        userfullname : {
            firstname : "girish",
            lastname : "Gurjar"
        }

    }
}

//console.log(regularUser);
//console.log(regularUser.fullname);

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

//const obj3 = {obj1,obj2}


//const obj3 = Object.assign(obj1,obj2)

//const obj4 = Object.assign({},obj1,obj2,obj5)


const obj4 = {...obj1, ...obj2}  // important , using spread operator
//console.log(obj3);

console.log(obj4);

const users = [
    {

        id: 1,
        email : "g@gmail.com"

    },
     {

        id: 1,
        email : "g@gmail.com"

    },
     {

        id: 1,
        email : "g@gmail.com"

    },
     {

        id: 1,
        email : "g@gmail.com"

    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));  // its important extracting keys form array of objects
console.log(Object.values(tinderUser)); // get value
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true , to check if this property is available or not , 




