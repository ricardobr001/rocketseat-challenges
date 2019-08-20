const bcrypt = require('bcryptjs')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Ricardo',
            email: 'ricardo@email.com',
            password: 'secret'
        })

        const compareHash = await bcrypt.compare('secret', user.password_hash)

        expect(compareHash).toBe(true)
    })
})
