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
    setTimeout(function(user){
       // console.log('Async task 3 completed');
        resolve({username: 'Girish', age: 25}); 
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user)
});
