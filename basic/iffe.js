//Immediately invoked function epressuion   used for immediate function and remove global scope variable and declaration polution
(function chai(){
    //named iffe
    console.log(`DB CONNECTED`);
})();

(( name )=>{
    //named iffe
console.log(`db connected 2 ${name}`);
})('madhu')