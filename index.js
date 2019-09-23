const RandExp = require('randexp');

module.exports.templateTags = [
  {
    name: 'randexp',
    displayName: 'Randexp',
    description: 'Generates a random value based on regex',
    args: [
      {
        displayName: 'Regex',
        defaultValue: '',
        type: 'string',
        placeholder: 'regex here'
      },
    ],
    run(_, type) {
      if(type==="") return 0;
      return new RandExp(new RegExp(type)).gen();
    }
  },
];
