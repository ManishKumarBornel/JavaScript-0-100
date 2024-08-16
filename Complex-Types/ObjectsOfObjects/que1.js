/*
    Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male
*/

function filteruser(users)
{
    return users.filter(user => user.age>18 && user.gender === 'male');
}
const users = 
[
    { name: 'Manish', age: 25, gender: 'female' },
    { name: 'Yash', age: 17, gender: 'male' },
    { name: 'davidlee', age: 30, gender: 'male' },
    { name: 'mark', age: 22, gender: 'female' },
    { name: 'weekend', age: 19, gender: 'female' }
]
const filtereduser = filteruser(users);
console.log(filtereduser);
  