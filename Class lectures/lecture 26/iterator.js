// Iterator

let str = "navi";

let obj = {name:"navi"};
console.log(str[Symbol.iterator]());

for(let i of str){
    console.log(str);
} 
function mul(a,b){
    const c =a*b;
    console.log(c);
}
mul(5);
