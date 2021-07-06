const { Event } = require('../models')

function authorization (req, res, next) {
    let { id } = req.params
    console.log(req.params);
    Event.findByPk(id)
        .then(data => {
            if(!data) throw { msg: 'Event not found' }
            else if (data.userId == req.userData.id) next()
            else throw { msg: "you're not authorize to do this" }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization