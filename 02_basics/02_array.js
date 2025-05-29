const  hindu_gods = ["hanuman","ganesha", "rama"]
const devils = ["ravana", "kansa","kauravas"]

//merging 


// hindu_gods.push(devils)
// console.log(hindu_gods);


// const all = hindu_gods.concat(devils)

// console.log(all);

//spread  - spread all elements in array or value in array 
const overall_spread = [...hindu_gods,...devils]
// console.log(overall_spread);


const new_array = [1,2, [3,4,5, [6,7]]]

const real_new_array = new_array.flat(Infinity)
// console.log(real_new_array);



//console.log(Array.isArray("Girish"));
//console.log(Array.from("Girish"));
// console.log(Array.from({name: "Girish"})); // interesting , defined in anythiing in the key 


let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3));


