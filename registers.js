const HapiAlive = require('hapi-alive');
const pack = require('./package.json');

module.exports = [
  {
    plugin: HapiAlive,
    options: {
      path: '/healthcheck',
      tags: ['health', 'monitor'],
      responses: {
        healthy: {
          message: `Version: ${pack.version}`,
        },
        unhealthy: {
          statusCode: 400,
        },
      },
      healthCheck: async () => {
        await true;
      },
    },
  },
];
