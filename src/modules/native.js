//Use of file system native module
const fs = require('fs');

const data = fs.readFileSync('example.txt', 'utf8');
console.log("File content: ", data);