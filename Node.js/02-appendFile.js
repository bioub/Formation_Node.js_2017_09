const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname + '/logs');
const logFile = path.resolve(logDir + '/app.log');

const fileLogger = (path, msg, cb) => {
    fs.appendFile(path, `[${(new Date()).toLocaleString()}] ${msg}\n`, cb);
};

fs.stat(logDir, (err, stat) => {
    const next = () => {
        fileLogger(logFile, 'Ligne 1', (err) => {
            if (err) {
                return console.error(err.message);
            }
            fileLogger(logFile, 'Ligne 2', (err) => {
                if (err) {
                    return console.error(err.message);
                }
                fileLogger(logFile, 'Ligne 3', (err) => {
                    if (err) {
                        return console.error(err.message);
                    }
                    fileLogger(logFile, 'Ligne 4', (err) => {
                        if (err) {
                            return console.error(err.message);
                        }
                        fileLogger(logFile, 'Ligne 5', (err) => {
                            if (err) {
                                return console.error(err.message);
                            }
                        });
                    });
                });
            });
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

