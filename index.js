const archivo = require('fs');
const path = "./files/planos.txt";
const path2 = "./files/planos2.txt";
const path3 = "./files/planos3.txt";

//Escritura de un archivo
archivo.writeFileSync(path, "Hola mundo");

//Modificacion de un archivo asincrono
async function escribir(mensaje) {
    await archivo.appendFile(path2, mensaje, (err) => {
        if (err) throw err;
        else console.log("El archivo modificado");
    });

}

//Agregar dato a un archivo con informacion.
archivo.appendFileSync(path,"\nNueva linea con appendFileSync");
archivo.appendFileSync(path2,"\nNueva informacion en planos2");

escribir("\nEste es un mensaje Asincronico");

//Lectura de un archivo por consola.
console.log(archivo.readFileSync(path).toString());
console.log(archivo.readFileSync(path2).toString());

//Eliminar un archivo.
archivo.unlinkSync(path);

// Agregar datos capturados desde la consola.
let nombre = process.argv[2];
let apellido =  process.argv[3];

archivo.appendFileSync(path3, `Tu nombre es:${nombre} y tu apellido es: ${apellido}`);