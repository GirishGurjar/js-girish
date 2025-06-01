//for of

// ["", "" , ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){

    console.log(num);
    
}
const greetings = " Hello Sansaar"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
    
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('UK', "United Kindom")
map.set('IN', "India")
console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value);
    
    
}
//Objects for of
const mObject = {

    'game1' : 'NFS',
    'game2' : 'PUBG'
}
// for (const [key,value] of mObject) {
//     console.log(key,':-',value);
    
// }    // object is not iteratable in this way




// how object is iteratable 

const myobject = {

    js : 'javascript',
    cpp : 'c++',
     html : 'hypertext markup lang'
}

for (const key in myobject) {
  //  console.log(myobject[key]);
    
   // console.log(`${key} short key for ${myobject[key]}`);
    
}


const programming = ["js","rby","cpp"]
for (const key in programming) {
   

console.log(programming[key]);
}


// use of forIn loop in map

// const mapp = new Map()  // cant to iteration over the map
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('UK', "United Kindom")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
    
// }