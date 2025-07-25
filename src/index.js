//RANDOM NUMBER GENERATOR
const args = process.argv.slice(2);

let min = 1;
let max = 100;
let execute = true;

if(args.length >= 2 ){
    parsedMin = parseInt(args[0], 10);
    parsedMax = parseInt(args[1], 10);

    if(!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax){
        min = parsedMin;
        max = parsedMax;
    }else{
        console.log("Rango invalido. Se usar[a rango por defecto (1-100)");
        execute = false;
    }
}

if(execute){
    const randomNumber = Math.floor(Math.random()* (max - min +1)) + min;

    console.log(`Numero aleatorio generado entre ${min} y ${max}: ${randomNumber}`);
}