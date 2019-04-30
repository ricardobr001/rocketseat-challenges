const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()
nunjucks.configure(path.resolve('src', 'views'), {
    autoescape: true,
    express: app,
    watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    return res.render('index')
})

app.get('/major', require('./middleware'), (req, res) => {
    age = req.query.age
    res.render('major', { age: age })
})

app.get('/minor', require('./middleware'), (req, res) => {
    age = req.query.age
    res.render('minor', { age: age })
})

app.post('/check', (req, res) => {
    age = req.body.age

    if (age > 18) {
        res.redirect('/major?age=' + age)
    }

    res.redirect('/minor?age=' + age)
})

app.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
})