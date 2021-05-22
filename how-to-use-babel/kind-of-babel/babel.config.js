const preset = ['@babel/preset-react'];
const plugins = [
  [
    '@babel/plugin-transform-templete-literals',
    {
      loose: true,
    }
  ]
];

module.exports = { presets, plugins };