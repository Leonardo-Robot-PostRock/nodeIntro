const fs = require('node:fs');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
})

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    const header = ` TABLA DEL ${colors.red(base)} `.gray.bgYellow;
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            total = `${base * i}`
            totalString = toString(total);
            margen = ' '.repeat(13)
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${total}\n`;
        };

        if (listar) {
            console.log('='.repeat(15).rainbow);
            console.log(`${header}`);
            console.log('='.repeat(15).rainbow);
            console.log(consola.debug);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`.bgWhite.gray
    } catch (error) {
        throw error.error;
    }
}

module.exports = {
    crearArchivo
}