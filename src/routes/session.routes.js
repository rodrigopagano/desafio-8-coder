const {Router} = require('express')
const sessionController = require('../controller/session.controller')
const router = Router()

router.post('/register',sessionController.registerLogin);

module.exports = router;