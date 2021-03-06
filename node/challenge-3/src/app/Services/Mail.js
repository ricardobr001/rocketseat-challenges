const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

const viewPath = path.resolve(__dirname, '..', 'views', 'emails')

transport.use(
    'compile',
    hbs({
        viewEngine: {
            extName: '.hbs',
            partialsDir: `${viewPath}/partials`,
            layoutsDir: `${viewPath}/layouts`
        },
        viewPath: viewPath,
        extName: '.hbs'
    })
)

module.exports = transport
