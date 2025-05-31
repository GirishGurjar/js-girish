// Immediately invoked function expression

(function db() {
    console.log('db connected ');
    
    
})(); // use of semicolon is imported in iife

//iife to end with semicolon ;
( (name) => {

    console.log(`db connected ${name}`);
    
} )("girish")

