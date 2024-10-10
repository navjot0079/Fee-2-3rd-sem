// // 1.simple function
// function first(call){
//     console.log("This is a first");
//     call();
// }
// // 2. function callback
// function second(){
//     console.log("This is a second");
    
// }
// function third(){
//     console.log("This is a third");
    
// }
// third();
// // calling function
// first(second);

// 3. synchronous :
// console.log("stated");

// function myname(){
//     console.log("func stopped");
    
// }
// myname();
// console.log("ends");

// setTimeout

// 1.callback function
// 2.delay function
// console.log("searching")
// let a = setTimeout(()=> {
//     console.log("image found");
    
// },2000);
// clearTimeout(a); // it is used to prevent setTimeout function
// console.log("work done");

//setInterval
// console.log("searching");
// for(let i=0;i<1001;i++){
//     console.log("Printing");
    
    
// }
// let a = setInterval(()=> {
//     console.log("image found");
    
// });

//setInterval(a);//   it is used to prevent setTimeout function
// console.log("work done");


// let count=0;
// let a=setInterval(()=>{
//     count++;
//     console.log(`aja ${count}, agaya`);
//     if(count>3){
//         clearInterval(a);
//         console.log("phone ringing...");
        
//     }
// });

// callback()

// console.log("maggi lene gaya");
// setTimeout(()=>{
//     console.log("maggi lekar aaya");
//     console.log("magg banana start ki");
//     setTimeout(()=>{
//         console.log("maggi ban gyi");
//         console.log("maggi khai");
//         setTimeout(() => {
//             console.log("maggi khatam");
//             console.log("burp...");       
//         },2000 );
//     },2000);
// },2000);



// const fun = document.getElementById('heading');
//  const change =  setTimeout(function(){
//         fun.innerHTML = "best games 20";
//     },2000);
//     document.querySelector('#btn').addEventListener('click',function(e){
//             clearTimeout(change);
//         console.log("stopped");
        
//     })

// const saydate = setInterval(function(str){
//     console.log(str, Date.now());
    
// },1000);
// SetInterval(saydate,1000,"navi");


    


