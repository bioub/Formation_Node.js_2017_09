const mongoose = require('mongoose');

module.exports = mongoose.model('contacts', {
   prenom: String,
   nom: {
       type: String,
   }
});
