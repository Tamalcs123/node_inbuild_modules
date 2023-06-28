/* fs is also an internal module of node js. With the help of the module we can perform different 
   operations on our file such as read, write, update and delete. Also we perform create a
   directory, remove a directory, check if there is a directory exists or not.And also we can 
   check files which are present inside a directory.*/

const fs=require('fs');

// let content= fs.readFileSync('first.txt');
// console.log("This is the content -> "+content)

// fs.writeFileSync('third.txt','This is third file')
// console.log("Done");

// fs.appendFileSync('second.txt','This is the updated one');
// console.log('Updated');


// fs.unlinkSync('third.txt');
// console.log('deleted');

// fs.mkdirSync('newDir');
// console.log("created");


// fs.rmdirSync('newDir');
// console.log("deleted");

// const doesExists= fs.existsSync('third.txt');
// console.log(doesExists)

const folderPath='C:\\Users\\LENOVO\\Desktop\\Node inbuild modules\\newDIrectory'
const dataExists= fs.readdirSync(folderPath);
console.log(dataExists)