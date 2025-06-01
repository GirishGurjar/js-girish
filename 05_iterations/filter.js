//const coding = [ "js", "java", "paython","cpp"]


// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(values);
// it will return undefined cannot work with foreach to return anything 


const myNums = [ 1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => {
//    return  num > 4
// })

// console.log(newNums);


// using foreach also 
const newNums = []

myNums.forEach( (num)=> {
    if(num > 4) {
        newNums.push(num)
    }
    
})

console.log(newNums);



// filter exercise


const  books = [
    {titel : 'book one', genre : 'Fiction', publish : '1981', edition: '1990' },
    {titel : 'book two', genre : 'Non-Fiction', publish : '1991', edition: '2000' },
    {titel : 'book three', genre : 'Science', publish : '1985', edition: '2004' },
    {titel : 'book four', genre : 'History', publish : '1995', edition: '2005' },
    {titel : 'book five', genre : 'Non-Fiction', publish : '2001', edition: '2011' },
]

//const userBooks = books.filter((bk) => bk.genre === 'Non-Fiction')
const userBooks = books.filter((bk) => bk.publish >= 1985 && bk.genre == 'History' )
console.log(userBooks);
