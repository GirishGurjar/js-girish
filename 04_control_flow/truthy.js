//const userEmail = "girish@gmail.com"
const userEmail = []
// if(userEmail){
//     console.log("i have user email");

    
// } else {
//     console.log("invalid email");
    
// }


// Falsy values 
    // false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//Truthy values
   // [] , "0" , 'false' , " ",{},


   if (userEmail.length === 0) {
    
    console.log("Array is empty");
    
   }

   const myObj = {}

   if(Object.keys(myObj).length === 0) {
    console.log("object is empty");

   }


   //Nullish Coalescing Operator
// this operator consider empty undefined which is consider null or undefined and it takes the value later in diiferent way

   let val1;
    // val1 = 5 ?? 10
    //val1 = null ?? 10
    //val1 = undefined ?? 15

    // val1 = null ?? 10 ?? 20



   console.log(val1);

   
   //Terniary operator
   // condition ? true : false
   
   const TeaPrice = 100
   TeaPrice <=80 ? console.log("less than 80"): console.log("more than 80");
   
   