const argv = require('yargs')
             .option('base', { 
                alias: 'b',
                type: 'number',
                demandOption: true,
                describe: 'Base sobre la cual se hace la multiplicacion'
             })
             .option('list', { 
                alias: 'l',
                type: 'boolean',
                default: false,
                describe: 'Si esta presente lista la multiplicacion'
             })
             .option('hasta', { 
               alias: 'h',
               type: 'number',
               default: 10,
               describe: 'Limite de la multiplicacion, si no existe multiplica hasta 10'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw `El argumento [ b,base ] no es un numero`;
                }
                if(isNaN(argv.h)){
                  throw `El argumento [ h,hasta ] no es un numero`;
              }
              return true;
             })
             .argv;

module.exports = argv;