const express = require('express');
const router = express.Router();
const homePageOcr = require('./src/controllers/homePageAndOcr');





router.get('/', homePageOcr.homePageOcr);
router.post('/upload', homePageOcr.receiveFileHomeOcr);


module.exports = router;