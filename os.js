const os = require('os');

function showSystemInfo(){
    console.info(`Sistema oeprativo: ${os.type()}`);
    console.info(`Platform: ${os.platform()}`);
    console.info(`Architecture: ${os.arch()}`);
    console.info(`OS Version: ${os.release()}`);
    console.info(`CPU cores: ${os.cpus().length}`);
    console.info(`Total Memory: ${(os.totalmem()/1024/1024).toFixed(2)} MB`);
    console.info(`Free Memory: ${(os.freemem()/1024/1024).toFixed(2)} MB`);
    console.info(`Home Directory: ${os.homedir()}`);
    console.info(`OS Version: ${os.release()}`);
};


showSystemInfo();