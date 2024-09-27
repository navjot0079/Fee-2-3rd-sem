var person1 = {
    name : "navi",
    age  : 19,

};
// console.log(person1);


// person2 object person1 property as a prototype
var person2 = Object.create(person1);
// console.log(person2);
console.log(person2.__proto__ );


// __proto__ : is used for implementing js

var person3= Object.create(person2);
console.log(person3.name)

person2.name = "sonam"
console.log(person2.name)

// console.log(person3.__proto__)
// console.log(person1.__proto__)

// console.log(person3.__proto__ == person2)
// console.log(person2.__proto__ == person1)
// console.log(person3.__proto__ == person1)

// console.log(person1.__proto__ == Object.prototype)
// console.log(Object.prototype.__proto__)

console.log(person3.hasOwnProperty("name"));

var a=10;
console.log(a.prototype.__proto__ == Number.prototype);

var str="navi";
console.log(str.prototype.__proto__ == String.prototype);
