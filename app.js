



const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

// console.log(argv)
// console.log('base: yargs', argv.base)





crearArchivo(argv.b, argv.l, argv.h)
.then (nombreArchivo=> console.log (`'${nombreArchivo.rainbow} creado `) )
.catch(err=> console.log (err));
