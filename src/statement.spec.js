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

describe('Function Statement', () => {
  it('should render apropriate text log', () => {
    const log = statement(actualInvoice, actualPlays);
    const expectLog = 'Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n';
    expect(log.replace(/\s/g, '')).toBe(expectLog.replace(/\s/g, ''));
  });

  it('should render apropriate html log', () => {
    const log = htmlStatement(actualInvoice, actualPlays);
    const expectLog = '<h1>Statement for BigCo</h1>\n<table>\n<tr><th>play</th><th>seats</th><th>cost</th></tr>\n<tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n<tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n<tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n</table>\n<p>Amount owed is <em>$1,730.00</em></p>\n<p>You earned <em>47</em> credits</p>\n';
    expect(log.replace(/\s/g, '')).toBe(expectLog.replace(/\s/g, ''));
  });
});
