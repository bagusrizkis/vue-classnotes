const { Trending, Event } = require('../models')
/*
1. balikin data JSON
2. kasih status code
 */
class TrendingController {
    static findAll (req, res, next) {
        Trending.findAll({
          include: [
            { model: Event, as: 'detail' },
          ]
        })
            .then(data => {
                res.status(201).json({ Trendings: data })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TrendingController