function multiplyBy5(num){


    return num * 5

}

multiplyBy5.power = 2;
console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype);


function createUser(username, score) {

    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    score++;
}
const car = createUser("innova", 100);
const bike = createUser("bullet", 200);
 

/* 
This code defines a function `multiplyBy5` that takes a number as an argument and returns the number multiplied by 5. It also adds a property `power` to the function, which is set to 2. When the function is called with an argument of 10, it returns 50, and accessing the `power` property returns 2.
// This demonstrates that functions in JavaScript are first-class objects, meaning they can have properties and methods just like any other object.
// This is a simple example of how functions can be treated as objects in JavaScript.
// Functions can have properties and methods, just like objects.
// This allows for more flexible and powerful programming patterns, such as creating function factories or adding metadata to functions.

*/


