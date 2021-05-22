const presets = [
  ['@babel/preset-react',
    {
      targets: {
        chrome: '40',
      },
      useBuiltIns: 'entry',
      corejs: { version: 3, proposals: true }
    },
  ]
];

module.exports = { presets };