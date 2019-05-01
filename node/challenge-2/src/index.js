const server = require('./server')

server.listen(process.env.PORT || 3000, () => {
    console.log('Listening at http://localhost:3000')
})
