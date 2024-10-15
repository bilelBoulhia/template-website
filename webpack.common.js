const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    assetModuleFilename: '[path][name][ext]',
  },
};
