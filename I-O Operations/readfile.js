const fs = require('fs');
function read (err , data)
{
    console.log("error is ");
    console.log(err);
    console.log("data is ")
    console.lod(data);
}
//asyncr0
const dataa = fs.readFileSync('a.txt' , 'utf8' , read); 
console.log(dataa);



//syncro
const fs = require('fs')
const data = fs.readFileSync('a.txt' , 'utf8');       //utf is simple eng lang
console.log(data);

const fs1 = require('fs');
const content = fs1.readFileSync('b.txt' , 'utf8');
console.log(content);


