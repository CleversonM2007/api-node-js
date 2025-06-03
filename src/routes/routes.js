const express = require('express');
const router = express.Router();

const RotasCleverson= require ('./routes-cleverson')

router.use('/',RotasCleverson);

module.exports = router;