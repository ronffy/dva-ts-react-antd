
let path = require("path")

module.exports = {
  'components': path.resolve(__dirname, './src/components'),
  'domainComponents': path.resolve(__dirname, './src/domainComponents'),
  'utils': path.resolve(__dirname, './src/utils'),
  'modules': path.resolve(__dirname, './src/modules'),
  'routes': path.resolve(__dirname, "./src/routes"),
  'interfaces': path.resolve(__dirname, "./src/interfaces"),
  "configs": path.resolve(__dirname, "./src/configs"),
  "themes": path.resolve(__dirname, "./src/themes"),
  "models": path.resolve(__dirname, "./src/models")
}