// Au choix de manière
// synchrone (le + facile)
// asynchrone (le + dur)
// avec des promesses ou async/await (intermédiare)

// 1 - créer un répertoire dist dans Build
// s'il n'existe pas

// 2 - lire les fichiers horloge.js
// et main.js et les concaténer dans
// dist/bundle.js

// 3 - recopier le fichier index.html
// dans dist/index.html
// en transformant les 2 balises scripts
// par celle de bundle.js (String.prototype.replace)