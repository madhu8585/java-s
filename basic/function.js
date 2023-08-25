function saymyname(){
    console.log("m");
    console.log("a");
    console.log("d");
    console.log("h");
    console.log("u");
    console.log("k");
    console.log("a");
    console.log("r");
}
//saymyname()
/////////////////////////////////////////////////

//function addtwonumbers(number1,number2){     //parameter
 //   console.log(number1 + number2);
//}
function addtwonumbers(number1,number2){     //parameter
   //let result = number1 + number2
   //return result
   return number1 + number2
   
}
const result = addtwonumbers(5,6)   //arguments
//console.log("result:", result);


function loginUserMessage(username = "mad"){
    if(username === undefined){
console.log("please enter a username");
return
    }
    return ` ${username} just logged in `
}
//console.log(loginUserMessage("madhukar"))
//console.log(loginUserMessage("madhukar"))


function calCardPrice(...num1){ ///... this three dot are rest operator
    return num1

}
//console.log(calCardPrice(200, 400, 500));

const usern = {
    username: "madhuk",
    price:55
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(usern)
handleObject ({
    username : "sam",
    price : 56
})

const mynewarray = [200,300,400,500]
function returnSecondValue(getarray){
    return getarray[1]
}
    console.log(returnSecondValue(mynewarray));
    

    