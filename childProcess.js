/* child process an inbuild module of node js. It helps to create multiple sub processes
   with in a script.Basically we write some process here and the script helps to run the 
   processes in our local mechine such as open calculator, open browser, redirect 
   to a web page and also run a file from another file. */

const cp= require('child_process');

// console.log("trying to open a calculator");

// cp.execSync('calc');

// console.log("opened");

// cp.execSync('start chrome')
// console.log('opened');

// cp.execSync('start chrome https://github.com/goldbergyoni/nodebestpractices');

console.log('Output => '+cp.execSync('node test.js'));



