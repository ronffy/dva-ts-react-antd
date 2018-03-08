const { apis, Mock } = require('./common').default;

const getData = (ROLE) => {
  return Mock.mock({
    'data|11': [
      {
        'id|+1': 1,
        name: '@CNAME',
      }
    ]
  })
}

module.exports = {

  [`GET ${apis.demo.demoapi1}`] (req, res) {
    res.status(200).json(getData())
  },

}
