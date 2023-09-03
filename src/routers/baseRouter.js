const express = require('express')
const auth = require('../middlewares/auth')
const {
    exampleGetMethod,
    examplePostMethod,
    exampleStreamMethod,
} = require('../clients/exampleClient')

const router = new express.Router()

router.get('/', auth, (req, res) => {
    const startTime = new Date();
    exampleGetMethod(req, (clientResponse) => {
        res.send(clientResponse)
        const endTime = new Date();
        console.info('Start Date: ', startTime.toISOString())
        console.info('End Date: ', endTime.toISOString())
        console.info('Response time in milliseconds: ', endTime - startTime)
    })
})

router.post('/', auth, (req, res) => {
    const startTime = new Date();
    examplePostMethod(req, (clientResponse) => {
        res.send(clientResponse)
        const endTime = new Date();
        console.info('Start Date: ', startTime.toISOString())
        console.info('End Date: ', endTime.toISOString())
        console.info('Response time in milliseconds: ', endTime - startTime)
    })
})

router.post('/stream', auth, (req, res) => {
    const startTime = new Date();
    exampleStreamMethod(req, (clientStreamResponse) => {
        clientStreamResponse.on('close', () => {
            res.end()
            const endTime = new Date();
            console.info('Start Date: ', startTime.toISOString())
            console.info('End Date: ', endTime.toISOString())
            console.info('Response time in milliseconds: ', endTime - startTime)
        })
        clientStreamResponse.pipe(res)
    })
})

module.exports = router