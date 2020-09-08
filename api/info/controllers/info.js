module.exports = {
  async info() {
    return {
      database: strapi.config.database.connections.default,
      process: process.env
    }
  }
}
