const fs = require("fs");
const dateFormatter = require('platzidate');

// Obtener la fecha y hora actual usando platzidate
const fechaHora = dateFormatter.getLongTime();

// Crear el contenido con saludo y hora
const contenido = `¡Hola! Este archivo fue creado el ${fechaHora}`;

// Crear el archivo example.txt con el saludo y la hora
fs.writeFileSync('example.txt', contenido, 'utf8');
console.log(`Archivo creado: Se creó el archivo example.txt a las ${dateFormatter.getLongTime()}`);

// Agregar una nueva línea de texto al archivo
fs.appendFileSync('example.txt', '\nEsta es una nueva linea de texto', 'utf8');
console.log(`Línea agregada: Se agregó una nueva línea de texto al archivo example.txt a las ${dateFormatter.getLongTime()}`);