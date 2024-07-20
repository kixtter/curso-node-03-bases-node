const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// console.log(argv);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// const base = 3;
crearArchivo(argv.base, argv.listar, argv.hasta)
   .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
   .catch(err => console.log(err));
