var express = require('express');
var router = express.Router();

const contacts = [{
    prenom: 'Jean',
    nom: 'Dupont',
    id: '123'
}, {
    prenom: 'Eric',
    nom: 'Martin',
    id: '456'
}];

/* GET list. */
router.get('/', function(req, res, next) {
  res.render('contacts/list', { contacts });
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;

    const contact = contacts.find(c => c.id === id);

    if (!contact) {
       return next();
    }

    res.render('contacts/show', { contact });
});

module.exports = router;
