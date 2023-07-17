const yargs = require('yargs');
const colores = require('colors');
const archivo = require('fs');
const path = "./files/contenidos.txt";

async function escribir(mensaje) {
    await archivo.appendFile(path, mensaje, (err) => {
        if (err) console.log(err);
        else console.log("El archivo modificado");
    });
}

yargs.options({
    u: { demandOption: true, alias: 'usuario' },
    a: { demandOption: true, alias: 'apellido' }
});

const parametros = yargs.argv;

console.log(parametros.a.bgGreen)
console.log(parametros.a.red)

escribir(`${parametros.u} ${parametros.a}`);
