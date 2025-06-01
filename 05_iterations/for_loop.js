//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element == 5) {

        //console.log("5 is the number to break");
        
    }
//console.log(element);    
}

//console.log(i); // cant print outside the scope , 
// no access to print outside the scope 



for (let i = 1; i <= 10; i++) {

    // console.log(`outer loop: ${i}`);
     
    for (let j = 1; j <= 10; j++) {
     // console.log(`inner loop value is : ${j}`);
      //console.log(i + '*' +j + '=' + i * j);
      
        
    }
   
    
}


// array length 
let myArray = ["hanuman", "jamvant", "sugriv"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

//keywords
// break and continue

for (let index = 1; index <= 20; index++) {
 if(index == 5) {
    console.log(`detected 5`);
 continue      // story of continue , dectecting 5 , skip 5 and cgo ahead in the loop
    //break      // story of break , how to use it 
 }
console.log(`Value of i is ${index}`)
    
}

