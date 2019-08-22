const bcrypt = require('bcryptjs')

const truncate = require('../utils/truncate')
const factory = require('../factories')
const CORRECT_PASS = 'secret'

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should encrypt user password', async () => {
        const user = await factory.create('User', {
            password: CORRECT_PASS
        })

        const compareHash = await bcrypt.compare(CORRECT_PASS, user.password_hash)

        expect(compareHash).toBe(true)
    })
})
