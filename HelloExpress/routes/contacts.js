var express = require('express');
var Contact = require('../models/contact');
var router = express.Router();


/* GET list. */
router.get('/', function(req, res, next) {
    Contact.find()
        .then(contacts => {
            res.render('contacts/list', { contacts });
        })
        .catch(next);
});

router.get('/add', (req, res, next) => {
    res.render('contacts/add');
});

router.post('/add', (req, res, next) => {
    const contact = new Contact(req.body);
    contact.save()
        .then(contact => {
            res.redirect('/contacts');
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;

    Contact.findById(id)
        .then(contact => {
            if (!contact) {
                return next();
            }
            res.render('contacts/show', { contact });
        })
        .catch(next);
});



module.exports = router;
