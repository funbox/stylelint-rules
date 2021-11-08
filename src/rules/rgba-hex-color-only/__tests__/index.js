const { rule, ruleName, messages } = require('..');

testRule(rule, {
  ruleName,
  config: [true],
  syntax: 'scss',

  accept: [
    {
      code: `
      .one-rgba {
        color: rgba(#aaa, .4);
      }
     `,
      description: 'One valid rgba call.',
    },
    {
      code: `
      .multiple-rgbas {
        background: linear-gradient(to right, rgba(#aaa, .4), rgba(#bbb, 0));
      }
     `,
      description: 'Multiple valid rgba calls.',
    },
  ],

  reject: [
    {
      code: `
      .one-rgba {
        color: rgba(0, 0, 0, .4);
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'One invalid rgba call.',
    },
    {
      code: `
      .multiple-rgbas {
        background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(100, 100, 100, 0));
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'Multiple invalid rgba calls.',
    },
    {
      code: `
      .valid-invalid-rgbas {
        color: rgba(#000, .1);
        background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(#ccc, 0.9));
      }
     `,
      line: 4,
      messages: messages.rejected,
      description: 'Two valid & one invalid rgba call.',
    },
  ],
});
