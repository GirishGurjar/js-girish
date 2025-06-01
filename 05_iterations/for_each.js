const coding = [ "js", "java", "paython","cpp"]

// foreach is higher order function 

coding.forEach( function(item) {
   // console.log(item);
    
})


//forach using arrow function

coding.forEach( (item) => {
   // console.log(item);
    
} )

// from outside 

function printMe(item) {
  //  console.log(item);
}

//coding.forEach(printMe)


// 
// //            /// iteration in array of object using foreach
const mycoding = [
{
languageName : "java",
languageFilename: "java"

},
{
languageName : "python",
languageFilename: "py"

},
{
languageName : "javascript",
languageFilename: "js"

},
 

]

mycoding.forEach((item) => {


    console.log(item.languageName);


})
