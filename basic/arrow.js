const user = {
    username:"hit",
    price:99,

    welmes:function(){///this  kewords is used for current context in the scope variables
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}
//user.welmes()
//user.username="sam"
//user.welmes()

// function chai (){
//   let username="madhukar" 
//     console.log(this.username);
// }
// chai()

// const chai =function (){
//    let username="madhukar" 
//      console.log(this.username);
//  }


 // const chai = () => {
 //   let username="madhukar" 
 //     console.log(this);
 // }
 // chai()

 //const addtwo=(num1, num2)=>{
 //   return num1+num2
 //}
 //console.log (addtwo(2,4));

 //const addtwo=(num1, num2)=>  num1 + num2


 //const addtwo=(num1, num2)=>  (num1 + num2)
 const addtwo=(num1, num2)=>({username:"madh"})
 //console.log(addtwo(7,4));


