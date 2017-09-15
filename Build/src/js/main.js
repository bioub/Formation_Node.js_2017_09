// Module IIFE
// Immediately Invoked Function Expression
(function () {
    'use strict';

    const divElt = document.querySelector('.horloge');
    const clock = new Horloge(divElt);
    clock.start();
}());