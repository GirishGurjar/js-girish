
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

//console.log(loginUserMessage())   // if no value passed then output "undefined"



// how to pass multiple value , (params passing methods)
function calculateCartPrice(...num1) {    /// rest operator
//function calculateCartPrice(val1,val2, ...num1) {   // print only rest values except value
    return num1
    
}
//console.log(calculateCartPrice(200,400,500,3000));


const user = {
    usern : "girish",
    price : 200
}

function handleobject(any) {
    console.log(`Username is ${any.usern} price is  ${any.price}`);
    
    
}
// handleobject(user)
handleobject({
    usern : " sam",
    price : 399
})

//array function

const myNewarray  = [100,200,300]


function returnSecondValue(getArray) {
    return getArray[2]
}

//console.log(returnSecondValue(myNewarray));
console.log(returnSecondValue([200,300,600,400,650]));
