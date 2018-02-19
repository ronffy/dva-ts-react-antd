require('ts-node').register({
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "experimentalDecorators": true,
    "sourceMap": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react",
    "allowJs": true,
    "baseUrl": "./src",
    "moduleResolution": "node",
    "paths": {
      "components": [
        "components"
      ],
      "domainComponents": [
        "domainComponents"
      ],
      "utils": [
        "utils"
      ],
      "modules": [
        "modules"
      ],
      "routes": [
        "routes"
      ],
      "interfaces": [
        "interfaces"
      ],
      "configs": [
        "configs"
      ],
      "assets": [
        "assets"
      ]
    }
  },
  "exclude": [
    "node_modules"
  ]
})