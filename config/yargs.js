const argv = require('yargs')
    .option('b', {

        alias: 'base',
        type: 'number',
        demandOption: true,
describe:'Es la base de la multiplicacion'   
    })
    .option('l', {

        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {

        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'muestra hasta donde sera la multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ' La base tiene que ser un numero'
        }
        return true;
    }
    )
    .argv;

module.exports=argv;
