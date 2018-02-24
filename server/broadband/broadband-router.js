const ROOT_PATH = process.cwd();
const express = require('express');

const router = new express.Router();
const { getBroadbrands } = require(`${ROOT_PATH}/server/broadband/controllers`);

router.get('/list-all-broadband', getBroadbrands);

module.exports = router;
