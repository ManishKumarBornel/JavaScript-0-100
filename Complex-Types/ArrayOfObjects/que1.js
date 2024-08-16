/*  
    Write a function that takes an array of users as inputs and returns 
    only the users who are more than 18 years old
*/

function canVote(users) 
{
    const eligibleUsers = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.age >= 18) 
        {
            eligibleUsers.push(user);
        }
    }
    return eligibleUsers;
}
const users = 
[
    { name: "Manish", age: 18 },
    { name: "Yash", age: 19 },
    { name: "Vansh", age: 8 }
];
const eligibleUsers = canVote(users);
console.log(eligibleUsers);
