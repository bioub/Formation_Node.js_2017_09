
const logClosure = function (msg) {
    return function () {
        return msg;
    };
};

const hello = logClosure('Hello');
console.log(typeof hello); // function
console.log(hello()); // Hello

const autreExemple = function(msg) {
  setTimeout(function() {
      console.log(msg);
  }, 1000);
};

autreExemple('Hello 2');

for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

for (var i=0; i<3; i++) {
    setTimeout(function(iSaved) {
        return function() {
            console.log(iSaved);
        };
    }(i), 1000);
}
