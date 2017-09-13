const fs = require('fs');
const path = require('path');
const util = require('util');

const logDir = path.resolve(__dirname + '/logs');
const logFile = path.resolve(logDir + '/app.log');

const fileLogger = (path, msg) => {
  return new Promise((resolve, reject) => {
    const line = `[${(new Date()).toLocaleString()}] ${msg}\n`;
    fs.appendFile(path, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const statPromise = util.promisify(fs.stat);
const mkdirPromise = util.promisify(fs.mkdir);

const logs = async function() {
  try {
    await statPromise(logDir);
  }
  catch (err) {
    await mkdirPromise(logDir);
  }

  try {
    await fileLogger(logFile, 'Ligne 1');
    await fileLogger(logFile, 'Ligne 2');
    await fileLogger(logFile, 'Ligne 3');
    await fileLogger(logFile, 'Ligne 4');
    await fileLogger(logFile, 'Ligne 5');
  }
  catch (err) {
    console.error(err.message);
  }
};

logs();

