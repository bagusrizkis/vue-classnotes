const { User } = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register (req, res, next) {
        let { email, password } = req.body
        User.create({
            email,
            password
        })
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email
                })
            })
            .catch(err => {
                console.log("1. error: ", err)
                next(err)
            })
    }

    static async login (req, res, next) {
        try {
            let { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if(!user) throw { msg: 'invalid email or password', status: 400 }
            let comparePassword = comparePass(password, user.password)
            if(!comparePassword) throw { msg: 'invalid email or password', status: 400 }
            let payload = {
                id: user.id,
                email: user.email
            }
            let token = generateToken(payload)
            res.status(200).json({ token })
        } catch (err) {
            next(err)
            // let msg = err.msg || 'internal server error'
            // res.status(500).json({ error:  msg}) 
        }
    }
}

module.exports = UserController