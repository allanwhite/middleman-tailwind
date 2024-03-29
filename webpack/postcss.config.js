const tailwindcss = require('tailwindcss');
const inProduction = (process.env.NODE_ENV == 'production');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

const DEV_PLUGINS = [
  require('postcss-import')(),
  tailwindcss('./tailwind.config.js'),
  require('autoprefixer')()
]
const PROD_PLUGINS = [
  require('postcss-import')(),
  tailwindcss('./tailwind.config.js'),
  require('autoprefixer')(),
  require('postcss-purgecss')({
    content: [
      __dirname + '/../source/**/*.html',
      __dirname + '/../source/**/*.erb',
      __dirname + '/../source/**/*.slim'
    ],
    whitelist: ['animated', 'active', 'loaded', 'blockquote', 'inline-float'],
    whitelistPatterns: [/^bg-/, /^text-/, /^medium-zoom-/, /^float-/, /^min-h-/],
    // whitelistPatternsChildren: [/^bg-/],
    extractors: [{
      extractor: TailwindExtractor,
      extensions: ['html', 'js', 'erb', 'html.erb', 'slim', 'html.slim']
    }]
  }),
  require('cssnano')()
]


module.exports = {
  plugins: inProduction ? PROD_PLUGINS : DEV_PLUGINS

}