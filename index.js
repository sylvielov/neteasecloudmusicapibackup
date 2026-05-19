const fs = require('fs')
const path = require('path')
const tmpPath = require('os').tmpdir()

if (!fs.existsSync(path.resolve(tmpPath, 'anonymous_token'))) {
  fs.writeFileSync(path.resolve(tmpPath, 'anonymous_token'), '', 'utf-8')
}

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
