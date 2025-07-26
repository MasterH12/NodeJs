const fs = require("fs");

// Crear el archivo example.txt con el contenido "Hola Mundo"
fs.writeFileSync('example.txt', 'Hola Mundo', 'utf8');

// Console log para indicar que se completó la tarea
console.log('Tarea completada: Se creó el archivo example.txt con el contenido "Hola Mundo"');