/*
    Write a function that takes a new object as input which has name , 
    age  and gender and greets
     the user with their gender (Hi Mr/Mrs/Others , your age is 21)
*/

function greet(name)
{
    console.log("HI Mr " + user.name + ", your age is " + user.age)
}
let user =
{
    name : "manish",
    age: 19,
    gender: "Male"
}
console.log(greet(user));