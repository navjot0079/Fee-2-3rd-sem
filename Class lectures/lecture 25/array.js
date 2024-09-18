let items = ['shivam','11603406','83.4%', 'Lovely Professional University'];
console.log(items);

// Arrays are mutable:
// 1.Arrays are mutable:
items[1] = 324;
console.log(items)

// Accessing index 1 value inside  array:
// 2.Accessing index 1 value inside  array:
console.log(items[1]);

// Accessing length of array
// 3.Accessing length of array
console.log(items.length)

// Accessing not present value inside a array: undefined(result come)
// 4.Accessing not present value inside a array: undefined(result come)
console.log(items[8])

// Array type: object it is
// 5.Array type: object it is
console.log(typeof(items))

// Accessing array items particular element from that item:
// 6.Accessing array items particular element from that item:
console.log(items[0][3]);

//  ##### Array Method  #####
console.log(letters.slice(2,5))
console.log(letters.slice(-2))


// 10. splice: it is used for reomving replacing and adding new element in our array:
// 10. splice: it is used for removing/replacing and adding new element in our array:

// splice(start, deleteCount, item0 ... itemN)
// It changes our original array where slice dont
let fruits = ['apple','bananas','guava', 'pineapple'];
console.log(fruits.splice(3))  //It count from index 4 upto next string length
console.log(fruits.splice(0,1));
console.log(fruits.splice(0,1,'grapes','lemon'));
console.log(fruits);
// 11. sort: sorts an array: 
let letter = ['a','d','i','c','b'];
console.log(letter.sort())
// but it doesn't sort number in ascending order. It sort as per that character associate string value
let num = [1,10,16,21,2,6,20];
console.log(num.sort());
//  ##### Array Reference ####
let str = "shivam";
let str2 = str
console.log(str == str2);
let marks = [89,91,33,56]
let newMarks = marks;
console.log(marks == newMarks);
console.log(marks === newMarks);
marks = [89,91,22];
console.log(marks == newMarks);
console.log(marks === newMarks);
// ###### 
const arr = [1,2,3,4,5]
// Assignment is not possible
// arr = [1,2,3,4,8]
// console.log(arr);
console.log(arr.push('6'));
console.log(arr);
// Assignment is not possible
// let arr1 = [1,2,3,4,5]
// console.log(arr = arr1)
// Multi dimensional array or nested array:
let mark1 = [ [98,67],[72,64], [53,27], [67,72]];
console.log(mark1); 
// to access array value
console.log(mark1[3][1]);