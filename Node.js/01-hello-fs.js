const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname + '/../Node.js/01-hello-fs.txt');
const dest = path.resolve(__dirname + '/../Node.js/01-hello-fs-copy.txt');

console.time('main rendu sync');
console.time('lecture fichier sync');
try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
}
catch (err) {
    console.error(err.message);
}
console.timeEnd('main rendu sync');
console.timeEnd('lecture fichier sync');




console.time('main rendu async');
console.time('lecture fichier async');
fs.readFile(src, (err, data) => {
    if (err) {
        return console.error(err.message);
    }
    fs.writeFile(dest, data, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Copie terminée');
    });
});
console.timeEnd('main rendu async');

