/* OS module is an inbuild module of node js module that helps to get information about our 
   OS specification such as system architecture, network interfaces, system specificaions of
   CPU*/

const os=require('os');

// console.log(os.cpus());

console.log(os.platform());

// console.log(os.arch())

// console.log(os.networkInterfaces())