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
    const header = ` TABLA DEL ${colors.red(base)} `.gray.bgWhite;
    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            total = base * i;
            totalString = toString(total);
            margen = ' '.repeat(14)
            margen2 = ' '.repeat(13)
            margen3 = ' '.repeat(12)
            centrar = ' '.repeat(14)
            if (total < 10 && i < 10) {
                salida += `${centrar}` + `${margen}${base + '  x  '} ${i} = ${total}${margen}\n`.bgMagenta;
            } else if (total >= 10 && i < 10) {
                salida += `${centrar}` + `${margen}${base + '  x  '} ${i} = ${total}${margen2}\n`.bgMagenta;
            } else {
                salida += `${centrar}` + `${margen}${base + '  x  '} ${i} = ${total}${margen3}\n`.bgMagenta;
            }
        };

        if (listar) {
            console.log(margen, '='.repeat(38).rainbow);
            console.log(`${margen}${margen}${header}${margen}`);
            console.log(margen, '='.repeat(38).rainbow);
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