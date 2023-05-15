const fs = require('node:fs');
console.clear()

let salida = '';
base = 3;

console.log('====================================');
console.log(`tabla del:${base}`);
console.log('====================================');

for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
};

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`tabla-${base}.txt creado`);
})