const fs = require('fs');
const path = require('path');
const async = require('async');

const logDir = path.resolve(__dirname + '/logs');
const logFile = path.resolve(logDir + '/app.log');

const fileLogger = (path, msg, cb) => {
  fs.appendFile(path, `[${(new Date()).toLocaleString()}] ${msg}\n`, cb);
};

fs.stat(logDir, (err, stat) => {
  const next = () => {

    async.series([
      (next) => fileLogger(logFile, 'Ligne 1', next),
      (next) => fileLogger(logFile, 'Ligne 2', next),
      (next) => fileLogger(logFile, 'Ligne 3', next),
      (next) => fileLogger(logFile, 'Ligne 4', next),
      (next) => fileLogger(logFile, 'Ligne 5', next),
    ], (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  };

  if (err) {
    fs.mkdir(logDir, (err) => {
      next();
    });
    return;
  }
  next();
});

