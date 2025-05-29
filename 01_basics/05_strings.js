const name = "girish";
const repoCount = 50;
console.log(name + repoCount);
console.log(`hello my name is ${name} and my repoCount is ${repoCount}` );

const gameName = new String(`girish-gurjar`)

// console.log(gameName[8]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf(`i`));


// const NewString =  gameName.substring(0,4)
// console.log(NewString);

const anotherString =  gameName.slice(0,4)
console.log(anotherString);



const NewStringOne = "    giris    "
console.log(NewStringOne);
console.log(NewStringOne.trim());


const url = "https://javawithgirish/girish%20gurjar"

console.log(url.replace('%20','-'));

console.log(gameName.split('-'));
console.log(url.includes('suresh'))

 