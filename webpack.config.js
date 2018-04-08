import path from 'path';
import webpack from 'webpack'
import aliasConfig from './alias.configs'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (webpackConfig, env) => {
  const production = env === 'production'

  webpackConfig.output.filename = '[name].[hash].bundle.js';
  webpackConfig.output.chunkFilename = '[name].[chunkhash].async.js';

  webpackConfig.entry.vendor = [
    "dva",
    "dva-loading",
    "react",
    "react-dom",
    "moment"
  ]



  if (production) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    )
    // webpackConfig.plugins.push(
    //   new ExtractTextPlugin('mceo.[name].css')
    // )
  }
  // const lessRule = webpackConfig.module.rules[3];

  // const sassRule = { ...lessRule },
  //   sassRuleUse = sassRule.use;

  // sassRule.test = /\.scss$/;

  // sassRuleUse[sassRuleUse.length - 1] = {
  //   loader: "sass"
  // };

  // webpackConfig.module.rules.push(sassRule);

  //awesome-typescript
  // webpackConfig.module.rules[7].use.pop();

  webpackConfig.resolve.alias = aliasConfig
  webpackConfig.plugins.push(new CopyWebpackPlugin([
    {
      from: 'src/public',
      to: production ? '../' : webpackConfig.output.outputPath,
    },
  ]))
  webpackConfig.plugins.push(new webpack.HashedModuleIdsPlugin())
  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: "[name].[hash].js"
  }))

  webpackConfig.plugins.push(new HtmlWebpackPlugin({
      //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
      template: `${__dirname}/src/index.ejs`,
      //自动生成HTML文件的名字
      filename: production ? '../index.html' : 'index.html',
    }))

  

  return webpackConfig;
};
