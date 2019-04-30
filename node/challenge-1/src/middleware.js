module.exports = (req, res, next) => {
    if (!req.query.age) {
        return res.redirect('/')
    }

    return next()
}