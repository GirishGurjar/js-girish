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