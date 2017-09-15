const express = require('express');

const app = express();

app.all('/', (req, res) => {
  res.send('<h2>Hello</h2>');
});

app.get('/hello/add', (req, res) => {
  res.send(`Page d'ajout`);
});

app.get('/hello/:prenom', (req, res) => {
  res.send(`Hello ${req.params.prenom}`);
});

app.get('/api/hello', (req, res) => {
  res.json({msg: 'Hello'})
});

app.get('/redirect-google', (req, res) => {
  res.redirect('http://www.google.fr/')
});

app.use('/api', (req, res) => {
  res.statusCode = 404;
  res.json({msg: '404 not found'});
});

app.use((req, res) => {
  res.statusCode = 404;
  res.send('Mon erreur 404');
});

app.listen(8080, () => {
  console.log('listening');
});
