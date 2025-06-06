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