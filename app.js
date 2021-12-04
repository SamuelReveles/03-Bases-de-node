const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//PROBLEMAS: TEDIOSO, SI NO HAY BASE EN EL TERCER ARGUMENTO ESTA CHAFA
// const [ , , arg3 ] = process.argv;
// const [ , base = 5] = arg3.split('=');

crearArchivo(argv.base, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, '\ncreado'))
    .catch( err => console.log(err));