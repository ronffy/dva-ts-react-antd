const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = (webpackConfig, env) => {
  const production = env === 'production'
  // FilenameHash
  webpackConfig.output.chunkFilename = '[name].[chunkhash].js'

  if (production) {
    if (webpackConfig.module) {
    // ClassnameHash
      webpackConfig.module.rules.map((item) => {
        if (String(item.test) === '/\\.less$/' || String(item.test) === '/\\.css/') {
          item.use.filter(iitem => iitem.loader === 'css')[0].options.localIdentName = '[hash:base64:5]'
        }
        return item
      })
    }
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    )
  }

  webpackConfig.plugins = webpackConfig.plugins.concat([
    new CopyWebpackPlugin([
      {
        from: 'src/public',
        to: production ? '../' : webpackConfig.output.outputPath,
      },
    ]),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/entry.ejs`,
      filename: production ? '../index.html' : 'index.html',
      minify: production ? {
        collapseWhitespace: true,
      } : null,
      hash: true,
      headScripts: production ? null : ['/roadhog.dll.js'],
    }),
  ])

  webpackConfig.resolve.alias = {
    '@components': `${__dirname}/src/components`,
    '@models': `${__dirname}/src/models`,
    '@services': `${__dirname}/src/services`,
    '@utils': `${__dirname}/src/utils`,
    '@config': `${__dirname}/src/config`,
    '@ts-types': `${__dirname}/src/ts-types`,
    '@enums': `${__dirname}/src/utils/enums`,
    themes: `${__dirname}/src/themes`,
  }

  return webpackConfig
}
