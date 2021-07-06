const router = require('express').Router()
const eventController = require('../controllers/eventController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)


router.post('/', eventController.create)
router.get('/', eventController.findAll)
router.get('/:id', authorization, eventController.findOne)
router.put('/:id', authorization, eventController.update)
router.delete('/:id', authorization, eventController.delete)

// CRUD TODO

module.exports = router