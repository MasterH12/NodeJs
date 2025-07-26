const dateFormatter = require('platzidate');

console.log("Timestamp: ", dateFormatter.getTimeStamp());
console.log("Fecha en español: ", dateFormatter.getLongTime());
console.log("Fecha en Inglés: ", dateFormatter.getLongTime("en-US"));