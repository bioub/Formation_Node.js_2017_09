// Reference
let p1 = 'Jean';
let p2 = p1; // number et boolean: passage par valeur
p2 = 'Eric';
console.log(p1); // 'Jean'

let o1 = {
  p: 'Jean'
};
let o2 = o1; // passage par référence
o2.prenom = 'Eric';
console.log(o1.prenom); // 'Eric'

// object literal
const coords = {
  x: 10,
  y: 20,
};

for (var key in coords) {
  console.log('clé : ' + key);
  console.log('valeur : ' + coords[key]);
}

// Keys (ES5)
var keys = Object.keys(coords);

keys.forEach(key => {
  console.log('clé : ' + key);
  console.log('valeur : ' + coords[key]);
});

Math.pow(
  2,
  3,
);

const createButton = function (options) {
  options = options || {};
  const valeur = options.valeur || 'Sans titre';
  const largeur = options.largeur || 100;
};

createButton({
  largeur: 300,
});

// Fonction constructeur (avec une closure : mauvaise pratique)
const Voiture = function(marque, modele) {
  this.modele = modele;

  this.getInfo = function() {
    return 'Voiture ' + marque + ' ' + modele;
  };
};

const clio = new Voiture('Renault', 'Clio');
console.log(typeof Voiture); // function
console.log(typeof clio); // object
console.log(clio.modele); // Clio
console.log(clio.getInfo()); //Voiture Renault Clio

const p208 = new Voiture('Peugeot', '208');
console.log(p208.getInfo()); // Voiture Peugeot 208

console.log(p208.getInfo === clio.getInfo); // false

// Fonction constructeur (avec le prototype : bonne pratique)
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

const romain = new Contact('Romain');
console.log(romain._prenom);
console.log(romain.hello());
console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

