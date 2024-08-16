/*
    Write a function that takes a new object as input which has name , 
    age  and gender and greets
     the user with their gender (Hi Mr/Mrs/Others , your age is 21)
     also tell if they can vote
*/

function greet(name)
{
    console.log("HI Mr " + user.name + ", your age is " + user.age)
    if(user.age>=18)
    {
        console.log("THEY CAN VOTE");
    }
    else
    {
        console.log("THEY CANNOT VOTE");
    }
}
let user =
{
    name : "manish",
    age: 19,
    gender: "Male"
}
console.log(greet(user));