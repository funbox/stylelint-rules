import rule, { ruleName, messages } from '..';

testRule(rule, {
  ruleName,
  config: [true],
  syntax: 'scss',

  accept: [
    {
      code: `
      .test-single-pass {
        -webkit-transition: width 2s;
        transition: width 2s;
      }  
     `,
      description: 'One property.',
    },
    {
      code: `
      .test-multiple-pass {
        -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
        transition: width 2s, height 2s, background-color 2s, transform 2s;
      }
     `,
      description: 'Multiple properties.',
    },
    {
      code: `
      .test-trans-property-pass {
        transition-property: none;
        transition-property: width;
        transition-property: test_05;
        transition-property: -specific;
        transition-property: sliding-vertically;
      }
     `,
      description: 'Different transition properties.',
    },
  ],

  reject: [
    {
      code: `
      .test-single-fail {
        -webkit-transition: all 2s;
        transition: all 2s;
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'One property, all value is used.',
    },
    {
      code: `
      .test-multiple-fail {
        -webkit-transition: all 2s, height 2s, background-color 2s, -webkit-transform 2s;
        transition: width 2s, height 2s, all 2s, transform 2s;
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'Multiple properties, all value is used.',
    },
    {
      code: `
      .test-trans-property-fail {
        transition-property: all;
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'One transition property, all value is used.',
    },
  ],
});