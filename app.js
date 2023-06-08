const { createBaseFile } = require('./modules/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
const base = argv.b;
const list = argv.l;
const hasta = argv.h;
console.log('Valor base:', base,', Valor list:',list,', Valor hasta:',hasta);


 createBaseFile(base, list, hasta)
    .then(nf => console.log(`Archivo ${nf} creado exitosamente`.bgWhite.black))
    .catch(err => console.log(err));
 