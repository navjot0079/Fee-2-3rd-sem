// const user = new object()
const user = {}

user.id = "abs"
user.name = "navi"
user.login = false

// console.log(user)

const regularuser = {
    email  : "man@mail.com",
    fullname: {
        username: {
            fname:" navi",
            lname: " saini"
        }
    }
}
// console.log(regularuser.fullname.username);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj4 = { 5: "e", 6: "g"}

// const obj3 = (obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "harry@mail.com"
    },
    {
        id: 1,
        email: "harry@mail.com"
    },
    {
        id: 1,
        email: "harry@mail.com"
    },
    {
        id: 1,
        email: "harry@mail.com"
    }
]
// users[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isloggin'));

const course={
    coursename : "js in hindi",
    price:"999",
    courseInstructor: "Gojo"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);


