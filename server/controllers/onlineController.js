const { Online, Event } = require('../models')
/*
1. balikin data JSON
2. kasih status code
 */
class OnlineController {
    static findAll (req, res, next) {
        Online.findAll({
          include: [
            { model: Event, as: 'detail' },
          ]
        })
            .then(data => {
              const randomId = Math.floor(Math.random() * data.length)
              res.status(201).json({ Online: data[randomId] })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = OnlineController