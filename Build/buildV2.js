const fs = require('fs');
const path = require('path');
const util = require('util');

const destDir = path.resolve(__dirname + '/dist');
const destFileJS = path.resolve(destDir + '/bundle.js');
const destFileIndex = path.resolve(destDir + '/index.html');

const origDir = path.resolve(__dirname + '/src');
const origFileJSHorloge = path.resolve(origDir + '/js/horloge.js');
const origFileJSMain = path.resolve(origDir + '/js/main.js');
const origFileIndex = path.resolve(origDir + '/index.html');

const statPromise = util.promisify(fs.stat);
const mkdirPromise = util.promisify(fs.mkdir);
const readPromise = util.promisify(fs.readFile);
const writePromise = util.promisify(fs.writeFile);

statPromise(destDir)
    .catch(err => mkdirPromise(destDir))
    .then(() => readPromise(origFileJSHorloge))
    .then(data1 => readPromise(origFileJSMain).then(data2 => data1+data2))
    .then(data => writePromise(destFileJS, data))
    .then(() => readPromise(origFileIndex))
    .then(dataOrig => dataOrig.toString().replace(/<script(.*(\s).*)*<\/script>/,'<script src="bundle.js"></script>'))
    .then(data => writePromise(destFileIndex, data))
    .catch(err => {
        console.log(err.message);
    });
