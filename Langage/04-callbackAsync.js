setTimeout(function() {
    console.log('Hello');
}, 1000);

console.log('after setTimeout');

Array.prototype.forEachAsync = function(cb) {
    const savePrenom = function(prenom) {
        return function() {
            cb(prenom);
        };
    };

    for (var i=0; i<this.length; i++) {
        process.nextTick(savePrenom(this[i]));
    }
};

['Romain', 'Jean'].forEachAsync(function(prenom) {
    console.log(prenom);
});

console.log('after forEachAsync');