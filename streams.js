const fs = require("fs");

const readeableStream = fs.createReadStream("eloquentJavascript.txt", {encoding: "utf8"});

const writableStream = fs.createWriteStream("outputJs.txt");

readeableStream.on("data", (chunk) => {
    console.log("Reading chunk: ", chunk);
    writableStream.write(chunk);
});

readeableStream.on("end", () => {
    console.log(" ");
    console.log("--------- o ---------");
    console.log(" ");
    console.log("Reading finished");
    writableStream.end();
});

readeableStream.on("error", (err) => {
    console.error("error reading the file ", err);
});

writableStream.on("error", (err) => {
    console.error("error writting the file ", err);
});
