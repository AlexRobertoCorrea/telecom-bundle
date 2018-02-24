const ROOT_PATH = process.cwd();
const logger = require('winston');

const app = require(`${ROOT_PATH}/server/application`);
const config = require(`${ROOT_PATH}/server/config`);

process.title = require('./package.json').name;

const shutdown = () => {
  logger.warn('Server receive signal to shutdown.');
  process.exit(0);
};

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (er) => {
    logger.error(`uncaughtException caught the error: ${er.message}`);
    throw er;
  })
  .on('exit', (code) => {
    logger.info('Node process exit with code:', code);
  });

const server = app.listen(config.get('SERVER_PORT'), (err) => {
  if (err) {
    logger.error('Error on listening port. ', err.message);
  }
  
  logger.info(
    'Server starting at %s:%s.',
    server.address().address, server.address().port
  );
  
  server.on('close', () => {
    logger.info('Shutdown the application server');
  });
});

module.exports = server;
