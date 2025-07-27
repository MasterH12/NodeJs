/*
console.log("un print normal");
console.info("Console info. Similar a log pero para mostrar información");
console.warn("Console warn. Para Advertencias");
console.error("Console error. Para errores");

const usuarios= [
    {nombre: 'Ana', edad: 20, rol: "Desarrollador"},
    {nombre: 'Juan', edad: 23, rol: "Diseñador"},
    {nombre: 'María', edad: 24, rol: "Desarrollador"},
];

console.log(usuarios);
console.table(usuarios);
console.table(usuarios, ['nombre', 'rol']);

console.time('operación');
for (let i = 0; i < 5000; i++) {
    //Ejecución
}
console.timeEnd('operación');
*/

//Counting
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
console.countReset('contador');
console.count('contador');

//Grouping
console.group('main');
console.log('info 1');
console.group('secondary');
console.log('secondary info 1');
console.log('secondary info 2');
console.groupEnd();
console.groupEnd();

//Assertions (testing)
console.assert(1 === 1, 'It will not be shown');
console.assert(1 === 2, 'It will be shown because its false');


//Clearing
console.clear();

//Tracing
console.trace("It shows the actual trace");
