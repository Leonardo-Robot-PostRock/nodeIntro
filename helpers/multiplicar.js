const fs = require('node:fs');

const crearArchivo = (base = 5) => {
    console.log('====================================');
    console.log('tabla del: ', base);
    console.log('====================================');

    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    };

    // fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;
    //     console.log(`tabla-${base}.txt creado`);
    // })
    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt`);
}

module.exports = {
    crearArchivo
}