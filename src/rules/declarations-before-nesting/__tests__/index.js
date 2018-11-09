import rule, { ruleName, messages } from '..';

testRule(rule, {
  ruleName,
  config: [true],
  syntax: 'scss',

  accept: [
    {
      code: `
      .bar {
        content: 'baz';
      
        .qux {
          content: 'baz';
        }
      }
     `,
      description: 'One group, one nested group, declaration before nested group.',
    },

    {
      code: `
      .bar {
        content: 'baz';        
        
        .qux {
          content: 'baz';
        }
        
        // Comment on group
        .zux {
          content: 'baz';
        }
      }
     `,
      description: 'One group, two nested groups, declaration before nested group, comment after nested group.',
    },
  ],

  reject: [
    {
      code: `
      .foo {
        .bar {
          content: 'where';
        }
      
        content: 'baz';
      
        .baz {
          content: 'where';
        }
      
        content: 'baz';
      }
     `,
      line: 7,
      messages: messages.expected,
      description: 'One group, two nested groups, declaration after nested group.',
    },
    {
      code: `
      .foo {
        .bar {
          content: 'where';
      
          .baz {
            content: 'quz';
          }
      
          content: 'baz';
        }
      }
     `,
      line: 10,
      messages: messages.expected,
      description: 'Declaration inside nested group after nested group.',
    },
  ],
});
