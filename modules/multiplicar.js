const fs = require('fs');
const { Module } = require('module');
const colors = require('colors');


const createBaseFile = async (table = 5, list, hasta) => {
    try {
        const len = 11;
        let output = '';
        let outputFile = '';

        for (let index = 1; index < hasta; index++) {
            output += `${table} ${'X'.blue} ${index} ${'='.cyan} ${table * index}`;
            outputFile += `${table} X ${index} = ${table * index}`;
            if (index != hasta - 1) {
                output += '\n';
                outputFile += '\n';
            }
        }

        if (list) {
            console.log('======================='.green);
            console.log('      TABLA DEL'.blue, colors.magenta(table));
            console.log('======================='.green);
            console.log(output.cyan)
        };

        const nameFile = `table-${table}.txt`;

        fs.writeFileSync(`salida/${nameFile}`, outputFile);
        //console.log(`Archivo ${nameFile} creado exitosamente`);
        return nameFile;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    createBaseFile
}