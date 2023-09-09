for (let i = 0; i <=10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 is best no.");
    }
   // console.log(element);
}
for (let i = 0; i <=10; i++) {
    //console.log(`outer loop manager: ${i}`);
   for (let j = 0; j < 11; j++) {
   //console.log(`inner loop value: ${j}  and inner loop ${i}`);
   //console.log(i + '*' + j +  '=' + i*j);
    
   }
    
}
let myarray = [ "man", "superman", "bat"]
//console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
    
} 

// break and cotinue

for (let index = 1; index <=20; index++) {

    if (index==5) {
        //console.log(`detected 5`);
        break
    }
   // console.log(`value of index ${index}`)

}
for (let index = 1; index <=20; index++) {

    if (index==5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index ${index}`)

}