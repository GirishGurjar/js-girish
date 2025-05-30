
function callMyName(params) 
{
console.log("g");
console.log("i");
console.log("r");
console.log("i");
console.log("s");
console.log("h");
    
}

//callMyName()

// function addTwoNum(num1,num2) {    // pass values in parantheses ara called paramentes
   
//     console.log(num1 + num2);
   
// }

// const result = addTwoNum(3,5)  // pass value in parantheses are called arguments 

// console.log("result is ",result);


function addTwoNum(num1,num2) {
    //let result = num1 + num2      // if declared value  need to return it in the scope only
    //console.log("girish");

   // return result
    return num1 + num2    //shortest way to return value 
    //console.log("girish");  // no result

}
const result = addTwoNum(3,5)  // pass value in parantheses are called arguments 

// console.log("result is ",result);




function loginUserMessage(username = "someone") {
    if (!username) {  // ==== , ! are symbol of comparison
        console.log("please enter username ");
        return
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("girish"))

console.log(loginUserMessage())   // if no value passed then output "undefined"
