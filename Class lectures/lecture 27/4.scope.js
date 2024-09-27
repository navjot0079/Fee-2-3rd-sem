//2. functional scope : variable declared inside a function can be accessed into a function only.
let a =30;
function myname(){
    let a =89;
    console.log(a);
}
myname();
//1. global scope: by default all avriables has a functional scope means they can be accessing the throughput the code base.

// var glovar1= "Global Variable";
// let glovar2= "Global Variable";
// const glovar3= "Global Variable";

// function myname(){
//     console.log(glovar1);
//     console.log(glovar2);
//     console.log(glovar3);
// }
// myname();
  
//3. Block scope: 
{
    let b=30;
    const a =30;
    var c=20;
    console.log(b);
}
console.log(a);
console.log(c);
console.log(b);

    