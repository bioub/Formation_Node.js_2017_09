const contact = {
  prenom: 'Romain',
  hello() {
    console.log(`Je m'appelle ${this.prenom}`);
  },
  helloAsyncNamed() {
    setTimeout(this.hello.bind(this), 1000);
  },
  helloAsyncAnomymousClosure() {
    var that = this;
    setTimeout(function() {
      console.log(`Je m'appelle ${that.prenom}`);
    }, 1000);
  },
  helloAsyncArrow() {
    setTimeout(() => {
      console.log(`Je m'appelle ${this.prenom}`);
    }, 1000);
  }
};

contact.hello();
contact.helloAsyncAnomymousClosure();
contact.helloAsyncNamed();
contact.helloAsyncArrow();


// API Function
const hello = function(prenom, autre) {
  console.log(`Hello ${prenom}, ${autre}, je suis ${this.prenom}`);
};

hello.call(contact, 'Jean', 'Eric');
hello.apply(contact, ['Jean', 'Eric']);
hello.call(contact, ...['Jean', 'Eric']);

const helloContact = hello.bind(contact);
helloContact('Jean', 'Eric');
