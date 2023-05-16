const fs = require('node:fs');

// const crearArchivo = (base = 5) => {
//     return new Promise((resolve, reject) => {
//         console.log('====================================');
//         console.log('tabla del: ', base);
//         console.log('====================================');

//         let salida = '';
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         };

//         // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//         //     if (err) throw err;
//         //     console.log(`tabla-${base}.txt creado`);
//         // })
//         fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//             (err)
//                 ? reject(err)
//                 : resolve(`tabla-${base}.txt`)
//         });
//     })
// }

const crearArchivo = async (base = 5) => {
    try {
        console.log('====================================');
        console.log('tabla del: ', base);
        console.log('====================================');

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}