function saymyname() {
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("I");
    
}
// saymyname()

// function addtwonumber(n1,n2){ // parameters
//     console.log(n1+n2);
// }

function addtwonumber(n1,n2){ // parameters
    let result = n1+n2;
    return result;
}

const result = addtwonumber(3,6) // arguements
console.log(result);

function loginusermessage(username){
    if(username===undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginusermessage());

// console.log(loginusermessage("navjot"));

function calculatecartprice(val1,val2,...num1){
    return num1;
 }
// console.log(calculatecartprice(200,400,500,1000));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user);

handleObject({
    username:"navi",
    price: 399
})
const newarray = [200,300,400]

function returnsecond(getarray){
    return getarray[1]
}
console.log(returnsecond(newarray));
