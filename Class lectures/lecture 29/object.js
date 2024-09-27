const mySum = Symbol("key1");

const js ={
    name : "navjot",
    [mySum] : "key1", // how to declare symbol in objects
    age : 18,
    "full" : "empty",
    email : "navi12@gmail.com",
    isLoggedIn : false,
    logindays : ["Monday","Tuesday"]
}

// console.log(js.email);
// console.log(js["email"]);
// console.log(js.full );
// console.log(js);

// js.email = "navi@imgamer.com";
// Object.freeze(js);

// js.email = "navi@google.com";
// console.log(js);

js.greeting = function(){
    console.log("hello user");
}

js.greeting2 = function(){
    console.log(`hello user, ${this.name} `);
}
    console.log(js.greeting());
    console.log(js.greeting2());
    


        
