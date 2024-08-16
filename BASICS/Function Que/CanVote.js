/* 
    Write a function called canVote that 
    returns true or false if the age of a user is > 18
 */

function Canvote(age)
{
    if(age>=18)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(Canvote(10));
console.log(Canvote(25))