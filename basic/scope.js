
let a= 300
if(true){
    let a = 10
const b = 20
//console.log("inner",b);

}




//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "madhu"
    function two(){
       const website = "youtube" ;
       console.log(username);
    }
    //console.log(website);
   // two()
}
//one()
if (true) {
    const username = "mdh"
    if (username==="mdh") {
        const web="youtube"
        //console.log(username + web);
    }
   // console.log(web);
}
//console.log(username);

////////////////////+++++++++++++////////////////
console.log(addone(4));
function addone(val){
    return val + 1
}


console.log(addtwo(7));
const addtwo = function(val){
    return val + 4
}
