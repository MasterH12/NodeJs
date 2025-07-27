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