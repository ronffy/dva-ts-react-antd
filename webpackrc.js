export default {
  "entry": "./src/index.tsx",
  // "proxy": {
  //   "/api": "http://172.31.50.78:7300/mock/59aceff89b1b9039308834b0/acs"
  // },
  "outputPath": './dist/static',
  "publicPath": '/static/',
  "theme": "./theme.config.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        "transform-decorators-legacy",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        "transform-decorators-legacy",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    }
  }
}
