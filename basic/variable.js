const accountId=12543
let emailId="nav@gmail.com"
var accountPassword="654321"
accountcity="kushinagar"
let lovename = "motki"


//console.table([accountId,emailId,accountPassword,accountcity,lovename]):
const id = Symbol('123')
const anotherId = Symbol('124')

//console.log(id === anotherId);
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "madhukar",
    age: 22,
}
//console.log(heros,myObj.name.indexOf('k'));
//console.log(heros,myObj.name.charAt(5));
//console.log(heros,myObj.name.length);

const name = "madhukar"
const repo = 55
//console.log(`my name is ${name} and my repo no. is ${repo} `);
 
const hundreads = 1000000
//console.log(hundreads.toLocaleString('en-IN'));
//===========================================================math========/
//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(5.089));
//==============================//date and time////////////
 //let myDate= new Date()
 //console.log(myDate.toString());
 //console.log(myDate.toDateString());
 //console.log(myDate.toLocaleString());
 //console.log(typeof myDate);
 //let myCreatedDate = new Date(2023, 5, 28)
 //let myCreatedDate = new Date(2023, 5, 28, 5, 3)
 let myCreatedDate = new Date("2023-01-14")
 //console.log(myCreatedDate.getTime());
 let mytimestamp = Date.now()
 
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDay());
//console.log(newDate.getMonth());
//console.log(newDate.getFullYear());
//console.log(newDate.getHours());


newDate.toLocaleString('default',{
    weekday:"short"
    
})
//console.log();
//=================================array///////////////

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeroes = ["ironman","thor"]
const myArr2 = new Array(1, 2, 3, 4,)
//console.log(myArr[1]);

// array methods///
 myArr.push(6)
 myArr.push(8)
 myArr.pop()
 //console.log(myArr);
 myArr.unshift(9)
 myArr.shift()
 //console.log(myArr);
 //console.log(myArr.includes(9));
 //console.log(myArr.indexOf(4));
 const newArr = myArr.join()
// console.log(myArr);
//console.log(typeof newArr);

///// slice... splice//////////////////////////////////

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
//console.log(myn1);
console.log(myn2);