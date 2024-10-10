// Q0
const user= function Employdata(Id,name,Designation){
    var obj={};
    obj.Id=Id;
    obj.name=name;
    obj.Designation=Designation;
    return obj;
}
console.log(user(123,"navjot","developer"));

// Q1

var cart = [{ id: 1, name: 'iphone 16', price: 164000, qty : 1},
    { id: 2, name: 'iphone 15', price: 84000, qty : 2},
]

const totalPrice = cart.reduce(function (sum, item) {
  return sum + item.price * item.qty;
}, 0);
console.log(totalPrice);


// Q2
function check(no){
    const ch = Math.sqrt(no);

    if(Number.isInteger(ch)){
        return no*no;
    }
}
var cart = [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49]
console.log(cart.filter(check));

// Q3
// const users = ['Amit', 'Ajay','Mukesh'];

// function randomusers(users){
//     return users.map( data(user,idx)) {
//        return {
//         id:idx+1,
//         name:user,
//         reward:Math.floor(Math.random()*11)
//     }
// }
// }
// const userList = randomusers(users);
//  console.log(users);
// console.log(userList);

// Q4
const menu = [
    "Kadai Paneer",
    "Dal Makhni",
    "Masala Dosa",
    "Chicken Soup",
    "Chicken Butter Masala",
    "Veg Chowmein",
    "Egg Curry",
    "Egg Maggie",
    "Chicken Fry",
    "Chicken Biryani",
    "Khichdi",
    "Handi Paneer",
    "Onion Paratha",
    "Garlic Naan",
    "Onion Pizza",
    "Garlic Bread",
    "Onion Rings",
    "Chilli Paneer",
  ];
  
  function isVeg(food) {
    if (
      food.toLowerCase().includes("chicken") ||
      food.toLowerCase().includes("egg")
    ) {
      return false;
    }
    return true;
  }
  const vegMenu = menu.filter(isVeg);
  console.log(vegMenu);
  
  

