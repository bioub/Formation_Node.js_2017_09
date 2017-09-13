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

statPromise(logDir)
  .catch(err => mkdirPromise(logDir))
  .then(() => fileLogger(logFile, 'Ligne 1'))
  .then(() => fileLogger(logFile, 'Ligne 2'))
  .then(() => fileLogger(logFile, 'Ligne 3'))
  .then(() => fileLogger(logFile, 'Ligne 4'))
  .then(() => fileLogger(logFile, 'Ligne 5'))
  .catch(err => {
    console.error(err.message);
  });

