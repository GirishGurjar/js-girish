//reducer

const array = [ 1,2,3]

// const myTotal = array.reduce(function(acc,currval) {
    
//     console.log((`acc: ${acc} and currval : ${currval}`));
    
//     return acc + currval
// }, 0)

const myTotal = array.reduce((acc,currval) => acc + currval, 0)

console.log(myTotal);



const shoppingCart = [

    {
        itemName : "js course ",
        price  : "1"
    },
    {
        itemName : "C++ course ",
        price  : "2"
    },
    {
        itemName : "py course ",
        price  : "3"
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) 


console.log(priceToPay);
