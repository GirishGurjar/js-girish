const accountId =1223233;
let accountEmail = "girish@gmail.com";
var accountPassword = "12345"
 accountCity = "Gwalior"
//accountId = 2  // not allowed
let accountState;

accountEmail = "abc@abc.com"
accountPassword = 1233434
accountCity = "Delhi"


//console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])
/*
prefer not to use 'var'  because of issue in block and functional scope

*/
console.log(accountState)

var a = 1
var a = 2
var a = 4
var a = 3
//var a = 5
//var a = 9
console.log(a);
/* var will never show error you can declare multiple values at time but output will be 
last declared value only rest all will not show  */
