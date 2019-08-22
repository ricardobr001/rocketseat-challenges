const { User } = require('../models')

const Mail = require('../services/MailService')

class SessionController {
    async store (req, res) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ message: 'user not found' })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'incorrect password' })
        }

        await Mail.send({
            from: 'Challenge 5 <challenge5@email.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'New access on your account',
            text: 'Hey there, we detected a new access to your account!'
        })

        return res.json({
            token: await user.generateToken()
        })
    }
}

module.exports = new SessionController()
