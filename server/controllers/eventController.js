const { Event } = require('../models')
/*
1. balikin data JSON
2. kasih status code
 */
class EventController {
    static findOne (req, res) {
        let { id } = req.params
        Event.findOne({
            where: { id }
        })
            .then(data => {
                res.status(200).json({ Event: data })
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll (req, res) {
        Event.findAll({
            where: {
                userId: req.userData.id
            }
        })
            .then(data => {
                res.status(201).json({ Events: data })
            })
            .catch(err => {
                next(err)
            })
    }

    static create (req, res, next) {
        let userId = req.userData.id
        let { title, imgUrl, tag, date } = req.body
        Event.create({
            title,
            imgUrl,
            tag,
            date,
            userId
        })
            .then(data => {
                res.status(201).json({ Event: data })
            })
            .catch(err => {
                next(err)
            })
    }

    static update (req, res) {
        let { id } = req.params
        let { title, imgUrl, tag, date } = req.body
        Event.update({
            title,
            imgUrl,
            tag,
            date
        }, { 
            where: { id }
         })
            .then(data => {
                res.status(201).json({ Event: data })
            })
            .catch(err => {
               next(err)
            }) 
    }

    static delete (req, res) {
        let { id } = req.params
        Event.destroy({ 
            where: { id }
         })
            .then(data => {
                res.status(201).json({ msg: 'deleted' })
            })
            .catch(err => {
               next(err)
            }) 
    }
}

module.exports = EventController