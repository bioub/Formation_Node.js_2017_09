// property Shortand
var x = 10;
var y = 20;

var coords = {
  x,
  y,
};

// method Shorthand
var Random = {
  getInt() {

  }
};


// computed proterty name
var clients = {
  c1: '1',
  c2: '2',
  c3: '3'
};
var i = 1;
var clients = {
  ['c' + (i)]: String(i),
  ['c' + (i)]: String(i),
  ['c' + (i)]: String(i),
};


// destructuring array
var prenoms = ['Romain', 'Eric'];
var romain = prenoms[0];
var eric = prenoms[1];
var [romain, eric] = prenoms;

// Spread operator (sur un tableau)
var autrePrenoms = [...prenoms];
console.log(autrePrenoms);

// destructuring object
var coords = {
  x: 10,
  y: 20,
};
var x = coords.x;
var y = coords.y;
var {x: x1, y: y1} = coords;
console.log(x1);

// destructuring object + property shortand
var {x, y, z = 30} = coords;
console.log(x);
console.log(z);


