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

const crearArchivo = async (base = 5, listar = false) => {
    const header = `TABLA DEL: ${base}`.underline.gray.bgYellow;
    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            total = `${base * i}`
            margen = ' '.repeat(12.5)
            salida += `${margen}${base} x ${i} = ${total}${margen}\n`;
        };

        if (listar) {
            console.log('='.repeat(36).rainbow);
            console.log(`${margen}${header}${margen}`);
            console.log('='.repeat(36).rainbow);
            console.log(salida.debug);
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