const ROOT_PATH = process.cwd();

const broadbrandData = require(`${ROOT_PATH}/server/broadband/data/broadbands.json`).broadbands;

const findBroadbands = () => broadbrandData;

module.exports = {
  findBroadbands
};
