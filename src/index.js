const [statement, htmlStatement] = require('./statement');

const actualPlays = {
  hamlet: {
    name: 'Hamlet',
    type: 'tragedy',
  },
  aslike: {
    name: 'As You Like It',
    type: 'comedy',
  },
  othello: {
    name: 'Othello',
    type: 'tragedy',
  },
};

const actualInvoice = {
  customer: 'BigCo',
  performances: [
    {
      playID: 'hamlet',
      audience: 55,
    },
    {
      playID: 'aslike',
      audience: 35,
    },
    {
      playID: 'othello',
      audience: 40,
    },
  ],
};

console.log(statement(actualInvoice, actualPlays));
console.log(htmlStatement(actualInvoice, actualPlays));
