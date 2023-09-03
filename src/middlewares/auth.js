module.exports = (req, res, next) => {
    console.log('Fake Authentication!')
    
    next()
}