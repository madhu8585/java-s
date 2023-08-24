// singleton///////
// object laterals//
const mySym = Symbol("key1")

const JsUser = {
    name: "madhukar",
    "full name": "madhukar pandey",
    [mySym]: "key2",
    age: 18,
    location : "jaipur",
    email: "mad@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}
//console.log(JsUser["name"]);
//console.log(JsUser.email);
//console.log(JsUser["full name"]);
//console.log( typeof JsUser[mySym]);

JsUser.email = "ol@email.com" // for change in object
//Object.freeze(JsUser)// for freez in object that not be changed
JsUser.email = "pl@gmail.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js  user");

}
JsUser.greetingtwo = function(){
    console.log(`hello js  user, ${this.name}`);

}
//console.log(JsUser.greeting());
//console.log(JsUser.greetingtwo());

////////////////objects continue. in singlton/////

//const tinderUser = new Object().......//singlton object
const tinderUser = {}      // non singltone object

tinderUser.id =  "123abc"
tinderUser.name = "madhu"
tinderUser.isloggedin = false
//console.log(tinderUser);


const regularUser = {
    email:"s@gmail.com",
    fullname: {
        userfullname:{
            firstname:"madhu",
            lastname:"pandey"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "w", 4:"r"}

//const obj3 = (obj1,obj2)
//const obj3 = Object.assign({} , obj1, obj2)

const obj3 = { ...obj1,...obj2}
//console.log(obj3);

const user = [
    {
        id:1,
        email: "sd@gmail.com"
    },
    {
        id:1,
        email: "sd@gmail.com"
    },
    {
        id:1,
        email: "sd@gmail.com"
    },
    {
        id:1,
        email: "sd@gmail.com"
    },
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('islogged'));