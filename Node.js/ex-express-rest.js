const express = require('express');
const app = express();

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: '123'
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: '456'
}];

// Sur la requête GET /api/contacts
// répondre en JSON le tableau complet
// [{"prenom": "Jean", "nom": "Dupont"}]

// Sur la requête GET /api/contacts/123
// répondre en JSON le contact 123
// {"prenom": "Jean", "nom": "Dupont"}

// Reprendre le callback précédent
// et rendre l'URL paramétrable
// si l'id de l'URL n'existe pas faire une erreur 404

app.listen(8080, () => {
  console.log('listening');
});
