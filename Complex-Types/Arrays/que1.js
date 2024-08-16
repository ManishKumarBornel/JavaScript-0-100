/*
    Write a function that takes an array of numbers as input, 
    and returns a new array with only even values.
*/
let numbers = [2,10,55,42];
let even=[];
for(let i =0 ; i<= numbers.length ; i++)
{
    if(numbers[i]%2==0)
    {
        even.push(numbers[i]);
    }
}
console.log(even);