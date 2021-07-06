const router = require('express').Router()
const eventRouter = require('./eventRouter')
const userRouter = require('./userRouter')
const trendingController = require('../controllers/trendingController')
const onlineController = require('../controllers/onlineController')
const authentication = require('../middlewares/authentication')

router.get('/', (req, res) => res.status(200).json({ msg: 'Welcome to Hack Event Server' }))
router.use('/users', userRouter)
router.use('/events', eventRouter)

router.use(authentication)
router.get('/trending', trendingController.findAll)
router.get('/online', onlineController.findAll)

module.exports = router