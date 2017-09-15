const express = require('express');
const bodyParser = require('body-parser');
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

// Middleware log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const auth = (req, res, next) => {
  // si le jeton d'auth est ok on laisse passer
  if (req.headers.authorization === '123') {
    return next();
  }
  res.statusCode = 401;
  res.json({
    msg: 'Token missing or not ok'
  })
};

// Middleware Auth
//app.use('/api/contacts', auth);

// Sur la requête GET /api/contacts
// répondre en JSON le tableau complet
// [{"prenom": "Jean", "nom": "Dupont"}]
app.get('/api/contacts', auth, (req, res) => {
  res.json(contacts);
});

app.post('/api/contacts', bodyParser.json(), (req, res) => {
  const contact = req.body;

  const lastId = contacts[contacts.length-1].id;
  contact.id = String(Number(lastId) + 1);

  contacts.push(contact);

  res.statusCode = 201;
  res.json(contact);
});

// Sur la requête GET /api/contacts/123
// répondre en JSON le contact 123
// {"prenom": "Jean", "nom": "Dupont"}
app.get('/api/contacts/:id', auth, (req, res, next) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    req.msg = 'Contact Not Found';
    return next();
  }

  res.json(contact);
});

// DELETE /api/contacts/:id

// UPDATE /api/contacts/:id

app.use('/api', (req, res) => {
  res.statusCode = 404;
  res.json({msg: req.msg || 'Not found'});
});

// Reprendre le callback précédent
// et rendre l'URL paramétrable
// si l'id de l'URL n'existe pas faire une erreur 404

app.listen(8080, () => {
  console.log('listening');
});
