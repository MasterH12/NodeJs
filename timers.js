
console.time('execution');

console.time('timeout');
const timeOut = setTimeout( () =>{
    console.log("this message is shown after 2 seconds");
    console.timeEnd('timeout');
}, 2000);
console.log("This timer executes inmediately");

setImmediate(() => {
    console.log("This message shows on the next bucle iteration");
    console.timeEnd('timeout');
    console.time('timeout');
})

const intervalId = setInterval(()=>{
    console.log("This messages shows each 3 seconds");
}, 3000);

setTimeout(()=>{
    console.log("Cancel the interval after 10 seconnds");
    clearInterval(intervalId);
}, 10000);

const timeOutId = setTimeout(()=>{
    console.log("This timeout won't execute");
}, 10000);

clearTimeout(timeOutId);

console.timeEnd("execution");