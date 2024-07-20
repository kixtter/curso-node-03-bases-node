const fs = require('fs');
const colors = require('colors');

//Promesa Explicita
const crearArchivo = (base = 5, listar = false, hasta = 10) => {
   return new Promise((resolve, reject) => {
      if (listar) {
         console.log('=============================='.bgGreen);
         console.log('       Tabla del'.inverse, colors.blue.bold(base));
         console.log('=============================='.bgGreen);
      }
      
      let salida = '';
      let consola = '';
   
      for (let i = 1; i <= hasta; i++) {
         salida += `${base} x ${i} = ${base * i}\n`;
         consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
      }

      if (listar)
         console.log(consola);
      
      try {
         fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
         resolve(`tabla-${base}.txt`.america);
      } catch(err) {
         reject(err);
      }
   });
}

//Promesa implicita
const crearArchivoAsync = async(base = 5) => {
   try {
      console.log('==============================');
      console.log('       Tabla del', base);
      console.log('==============================');
      
      let salida = '';
   
      for (let i = 1; i <= 10; i++) {
         salida += `${base} x ${i} = ${base * i}\n`;
      }
      console.log(salida);
      
      fs.writeFileSync(`tabla-${base}.txt`, salida);
      return `tabla-${base}.txt`; 
   } catch(err) {
      throw err;
   }
}

module.exports = {
   crearArchivo
}