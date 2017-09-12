['Romain', 'Jean'].forEach(function(prenom) {
    console.log(prenom);
});

console.log('after forEach');

const setTimeoutSync = function (cb, delay) {
  const debut = Date.now();

  while (debut + delay < Date.now()) {}

  cb();
};

setTimeoutSync(function() {
    console.log('Hello');
}, 1000);

console.log('after setTimeoutSync');
