//fetch('https://api.github.com/users/GirishGurjar').then().catch();

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB call, API call,network call, crypto call etc.

setTimeout(() => {
   console.log('Async task completed');
   resolve('Task completed');
    
}, 1000);

});

promiseOne.then(function(value){
    console.log(value);
})


new Promise(function(resolve, reject){

setTimeout(function(){
    console.log('Async task 2 completed');
    resolve('Task 2 completed');
}, 1000);

}).then(function(value){
    console.log(value);
}
)


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       // console.log('Async task 3 completed');
        resolve({username: 'Girish', age: 25, email: 'example@gmail.com'}); 
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user)
});


const promiseFour = new Promise(function(resolve,reject){

    setTimeout (function(){
let error = true;
if(error) {
    resolve({
        username: 'Girish',
        age: 25,
        email: 'g@gmail.com'
    }) 
    }else{
    reject('Error: Something went wrong');
}

    }, 1000);
})
const username = promiseFour.then((user) => {
    console.log(user);
 return user.username;    
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.error(error);
})