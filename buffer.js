const {Buffer} = require("buffer");

const bufferFromString = Buffer.from("Hello World!", "utf8");

console.log(bufferFromString);


//Allocating Bytes on buffer
const bufferAlloc = Buffer.alloc(10);

console.log(bufferAlloc);

bufferAlloc.write("nodejs");
console.log(bufferAlloc);

//Transcripting the buffer to a string
const bufferToString = bufferAlloc.toString("utf8", 0, 6);
console.log(bufferToString);