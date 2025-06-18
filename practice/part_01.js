//remove duplicates from an array

function removeDup(arr) {

    const uniqueArray = []

    for (let i = 0; i < arr.length; i++) {
    
    if (!uniqueArray.includes(arr[i])) {

        uniqueArray.push(arr[i])
        
         
    }
    }
    return uniqueArray;
}
console.log(removeDup([1,2,1,2,3,4,5,4,6,6]));


//remove duplicates from string

function removeDupfromStr(str){

    const uniquestr = []
}

//check if palindrome

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

console.log(isPalindrome('A man, a plan')); // Output: false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('carracecar'))


// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// console.log(isPalindrome('A man, a plan')); // Output: false
// console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
// console.log(isPalindrome('carracecar'))


// const number = [ 5,11,25,12,45,66,75,55,66,33,77,100]

// const multipleOfFive = []

// for(let i = 0; i < number.length; i++) {
//     if(number[i] % 5 === 0) {
        
//      multipleOfFive.push(number[i])   ;
//     }
//     }
    
//     console.log(`number are : ${multipleOfFive}`)


//odd-even
// const arr = [1,2,3,4,5,6,7,8]
// const even = arr.filter(num => num % 2 === 0 );
// const odd = arr.filter(num => num % 2 === 1);
// console.log(even);
// console.log(odd)

//remove dup

// const arr = [ 1,2,2,4,3,1,3,4,5,6]

// const remDuplicate = [...new set(arr)]

// reverse an array 

// const arr = [1,2,3,4,5];

// console.log(arr.reverse());


//max , min value 


// const arr = [1,2,3,4,5];
// console.log(Math.max(...arr))   // 5
// console.log(Math.min(...arr))   // 1
/************************************************/

//reverrse string

// const str = 'hello'

// const reverse = str.split('').reverse().join("")

// console.log(reverse)


//count vowels

// function vowels(str){
//     return str.match(/[aeiou]/gi)?.length || 0 ;
    

    
// }
// console.log(vowels('sadsdfoiouwrpfrvn'))

//fibonacci

// function fibonacci (n) {
//     const seq = [0, 1];
    
//     for(let i = 2; i < n; i++)  {
//         seq[i] = seq[i-1] + seq[i-2]
//     }
//     return seq;
// }

// console.log(fibonacci(10))

//prime number

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(12)); // true

//factorial
//function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120

