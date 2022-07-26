const { readFileSync,readFile } = require('fs');

readFile('./text/new.txt',(err,data)=>{  //non-blocking 
    if(err)throw err 
    else{
        console.log(`Async data: ${data.toString()}`);
    }
})



const data = readFileSync('./text/content.txt');  //blocking

console.log(`sync data: ${data.toString()}`);

console.log('running sucessfully!');




