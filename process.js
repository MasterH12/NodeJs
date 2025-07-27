
/*
console.log("PID: ", process.pid);
console.log("Current directory: ", process.cwd());
console.log("NodeJs Version: ", process.version);
console.log("Platform: ", process.platform);
console.log("Architecture: ", process.arch);
console.log("Ejectuion time: ", process.uptime(), "segundos");

console.log(process.env);
console.log('Path: ', process.env.PATH);
console.log('User Profile: ', process.env.HOME || process.env.USERPROFILE);
console.log("Node_ENV: ", process.env.NODE_ENV || "No definido");
*/
const memoryUsage = process.memoryUsage();

// Mostrar cada atributo de memoryUsage convertido a MB
console.log("=== Uso de Memoria (en MB) ===");
console.log("RSS (Resident Set Size):", (memoryUsage.rss / 1024 / 1024).toFixed(2), "MB");
console.log("Heap Total:", (memoryUsage.heapTotal / 1024 / 1024).toFixed(2), "MB");
console.log("Heap Used:", (memoryUsage.heapUsed / 1024 / 1024).toFixed(2), "MB");
console.log("External:", (memoryUsage.external / 1024 / 1024).toFixed(2), "MB");
console.log("Array Buffers:", (memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2), "MB");

process.on('exit', code => {
    console.log("The process was finished", code);
});

process.on('SIGINT', () => {
    console.log("The process was interrupted by Ctrl+C");
    process.exit(0);
});

console.log("Write something and press enter or Ctrl+C to exit");
process.stdin.on('data', data => {
    const input = data.toString().trim();

    if(input.toLowerCase() === "exit"){
        console.log("Exit command received");
        process.exit(0);
    }else{
        console.log("You Wrote: ", input);
        console.log("--------- o ---------");
        console.log("Write something and press enter or Ctrl+C to exit");
    }
})