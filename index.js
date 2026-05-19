const { consturctServer } = require('./server')
const { generateRandomChineseIP } = require('./util/index')

let app = null

module.exports = async (req, res) => {
  if (!app) {
    if (!global.cnIp) {
      global.cnIp = generateRandomChineseIP()
    }
    app = await consturctServer()
  }
  return app(req, res)
}
