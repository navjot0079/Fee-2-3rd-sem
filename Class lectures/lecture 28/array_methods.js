// array: map, filter , reduce , sort, ...spread, ..rest

// reduce:

let a = [1,2,3,4];

function myfunc(sum,nextvalue){

}
console.log(a.reduce());



// filter: 

let arr2 = [10,13,15,16];
 let mynum = function iseven(num){
    if(arr%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(a.filter(mynum));

// map : returns new array
var arr=[1,2,3,4];
let newcube = function (num){
    return num**3;
};

console.log(arr);
console.log(arr.map(newcube));