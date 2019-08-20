const request = require('supertest')

const app = require('../../src/app')
const truncate = require('../utils/truncate')

const { User } = require('../../src/app/models')

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should be able to authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Ricardo',
            email: 'ricardo@email.com',
            password: 'secret'
        })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: 'secret'
        })

        expect(response.status).toBe(200)
    })

    it('should not be able to authenticate with invalid credentials', async () => {
        const user = await User.create({
            name: 'Ricardo',
            email: 'ricardo@email.com',
            password: 'secret'
        })

        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: 'wrong'
        })

        expect(response.status).toBe(401)
    })
})
