const path = require('path');
const loaders = require('./webpack/loaders.js');
const plugins = require('./webpack/plugins.js');

const CopyPlugin = require('copy-webpack-plugin');

// module.exports = {
//   plugins: [
//     new CopyPlugin([
//       { from: 'source', to: 'dest' },
//       { from: 'other', to: 'public' },
//     ]),
//   ],
// };
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const HOST = process.env.HOST || 'localhost';
// const PORT = process.env.PORT || 8000;
// const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
  entry: {
    site: ['./source/javascripts/site.js', './source/stylesheets/site.scss']
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.CSSLoader
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    new CopyPlugin([
      // { from: './source/fonts', to: './.tmp/dist/fonts' },
      { from: 'source/fonts', to: 'build/fonts' }
    ]),
    // new BrowserSyncPlugin(
    //   // BrowserSync options
    //   {
    //     host: HOST,
    //     port: PORT,
    //     proxy: PROXY
    //   },
    //   // plugin options
    //   {
    //     // prevent BrowserSync from reloading the page
    //     // and let Webpack Dev Server take care of this
    //     reload: true
    //   }
    // ),
  ],
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  }
};