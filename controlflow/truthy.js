// const useremail = []
// if (useremail) {
//     console.log("got email");
// }else{
//     console.log("dont have email");
// }

// falsy value///////////////
// false, 0  , -0, bigint 0n, "", null, undefined,,NaN,

 //truthy value//////////////////////////////////////////
 //true, "0", 'false' , " ", [],{},function(){},

//  

const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
console.log("object is emt");   
}

//Nullish coalescing Operator(??): null undefinde

let var1;
//val1= 20  ?? 
//val1 = null ?? 
// var1 = undefined ?? 15

//var1 = null ?? 10 ?? 15


//console.log(var1);

//ternary operator///////////

//condition ? true : false
 
const iceprice = 100
iceprice >= 80 ? console.log("less than 80"): console.log("more than 80")