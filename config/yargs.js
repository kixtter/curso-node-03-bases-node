const argv = require('yargs')
   .options({
      'b': {
         alias: 'base',
         type: 'number',
         demandOption: true,
         describe: 'Es la base de la tabla de multiplicar'
      },
      'l': {
         alias: 'listar',
         type: 'boolean',
         default: false,
         describe: 'Muestra la tabla en consola'
      },
      'h': {
         alias: 'hasta',
         type: 'number',
         demandOption: true,
         describe: 'Límite de la tabla de multiplicar',
      }
   })
   .check((argv, options) => {
      if (isNaN(argv.b)) {
         throw 'La base tiene que ser un número';
      }
      if (isNaN(argv.h)) {
         throw 'El límite debe de ser un número';
      } else if (argv.h < 10) {
         throw 'El límite mínimo es de 10';
      }
      return true;
   })
   .argv;

module.exports = argv;