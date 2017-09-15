// Au choix de manière
// synchrone (le + facile)
// asynchrone (le + dur)
// avec des promesses ou async/await (intermédiare)

// 1 - créer un répertoire dist dans Build
// s'il n'existe pas

// 2 - lire les fichiers horloge.js
// et main.js et les concaténer dans
// dist/bundle.js

// 3 - recopier le fichier index.html
// dans dist/index.html
// en transformant les 2 balises scripts
// par celle de bundle.js (String.prototype.replace)
const path = require('path');
const util = require('util');
const Promise = require('bluebird');
const del = require('del');
const fs = Promise.promisifyAll(require('fs'));

const distDir = path.resolve(__dirname + '/dist');
const jsFiles = [
    path.resolve(__dirname + '/src/js/horloge.js'),
    path.resolve(__dirname + '/src/js/main.js')
];
const distJs = path.resolve(__dirname + '/dist/bundle.js');
const htmlFile = path.resolve(__dirname + '/src/index.html');
const distHtml = path.resolve(__dirname + '/dist/index.html');

del('dist')
    .then(() => fs.statAsync(distDir))
    .catch(err => fs.mkdirAsync(distDir))
    .then(() => fs.readFileAsync(jsFiles[0]))
    .then(data => fs.appendFileAsync(distJs, data))
    .then(() => fs.readFileAsync(jsFiles[1]))
    .then(data => fs.appendFileAsync(distJs, data))
    .then(() => fs.readFileAsync(htmlFile))
    .then(data => {
        let str = data.toString();
        let regexp = /<script *><\/script>/gm;
        str = str.replace(regexp, '')
        str = str.replace('</body>', '<script src="bundle.js"></script></body>')

        return fs.writeFileAsync(distHtml, str);
    })
    .then(() => console.log('Build done'));

