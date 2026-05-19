const { getModulesDefinitions, consturctServer } = require('./server')

let app = null

module.exports = async (req, res) => {
  if (!app) {
    const moduleDefs = await getModulesDefinitions()
    app = await consturctServer(moduleDefs)
  }
  return app(req, res)
}