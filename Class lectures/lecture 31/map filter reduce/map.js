// foreach
// const lang = ["js", "c", "c++", "java", "python"]

// const value = lang.forEach( (item)=> {
//     console.log(item);
//    // return item;
// })

// 1. filter
// const mynum= [2,3,4,5,6,7,9];
// const num = mynum.filter( (item) => item > 4)
// console.log(num);

// library

// const books= [
//     {bookname: "Book one", genre: "Fiction", published: "1990", edition: "2000"},
//     {bookname: "Book two", genre: "Non-Fiction", published: "1993", edition: "2005"},
//     {bookname: "Book three", genre: "Science", published: "1995", edition: "2004"},
//     {bookname: "Book four", genre: "Fiction", published: "1999", edition: "2010"},
//     {bookname: "Book five", genre: "Non-Fiction", published: "2000", edition: "2020"}
// ];
// let userbook = books.filter( (bk) => {
//     if(bk.genre==='Fiction') 
//         return books;
// })
// userbook = books.filter( (bk) => {
//     if(bk.edition > '2008' && bk.genre==='Non-Fiction') 
//         return books;
// })
// console.log(userbook);

// 2. map

const nums=[1,2,3,4,5,6,7,8,9];
// const mynum = nums.map( (n) =>  n+10);
const mynum = nums.map( (n) => n * 10)
                .map( (n) => n + 10)
                .filter( (n)=> n>50)
// console.log(mynum);

// 3.Reduce
const num = [0,1,2,3]
// const total = num.reduce( function (acc, curr) {
//     console.log(`Accumulator: ${acc} , current value: ${curr}`);
//     return acc + curr;
    
// },3)
// const total = num.reduce( (acc,curr) => acc + curr, 0);
// console.log(total);

const games = [
    {gamename: "valorant", price: 2000},
    {gamename: "Rocket league", price: 1500},
    {gamename: "Gta 5", price: 4000},
    {gamename: "PUBG", price: 1200},
]
const totalamt= games.reduce((acc,item) => acc + item.price, 0);
console.log(totalamt);
