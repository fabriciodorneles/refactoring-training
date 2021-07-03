const Statement = require('./statement');

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

describe('Function Statement', () => {
  it('should render apropriate log', () => {
    const log = Statement(actualInvoice, actualPlays);
    const expectLog = 'Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n';
    expect(log.replace(/\s/g, '')).toBe(expectLog.replace(/\s/g, ''));
  });
});
