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
    error: 'red'
})

const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };

        if (listar) {
            console.log('====================================');
            console.log('TABLA DEL: '.gray, base);
            console.log('====================================');
            console.log(salida.debug);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`.rainbow
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}