var nbs = [2, 3, 5];

var nbsDoubles = nbs.map(function(nb) {
  return nb * 2;
});

console.log(nbsDoubles.join(', ')); // 4, 6, 10

var somme = nbs.reduce(function(acc, nb) {
  return acc + nb;
}, 0);

console.log(somme);
