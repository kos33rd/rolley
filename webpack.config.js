const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const production = mode === 'production'

module.exports = {
  entry: {
    bundle: ['./src/index.js']
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false,
        },
      },
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: production ? false : 'source-map'
}
