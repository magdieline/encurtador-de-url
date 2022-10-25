const Hapi = require('@hapi/hapi');
const config = require('./config');
const register = require('./register');


module.exports = (async () => {

  const server = new Hapi.Server({
    port: config.environmentVariables.PORT,
    host: config.environmentVariables.HOST,

  });

  await server.register(register);

  return server;
})();
