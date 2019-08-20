const request = require('supertest')
const app = require('../../src/app')
const { User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should be able to authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Ricardo',
            email: 'ricardo@email.com',
            password_hash: 'secret'
        })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: 'secret'
        })

        expect(response.status).toBe(200)
    })
})
