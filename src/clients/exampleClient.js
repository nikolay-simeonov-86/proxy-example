const { Readable } = require('stream')

const exampleGetMethod = (req, res) => {
    setTimeout(() => {
        res(`Response from GET method from client: ${req.query.test.toUpperCase()}\n`)
    }, 1000)
}

const examplePostMethod = (req, res) => {
    setTimeout(() => {
        res(`Response from POST method from client: ${req.body.test.toUpperCase()}\n`)
    }, 1000)
}

const exampleStreamMethod = async (req, res) => {
    const readStream = Readable({
        read() {}
    })
    res(readStream)
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(() => {
            readStream.push(`Response from POST Stream method from client ${i}\n`)
            resolve()
        }, 1000))
    }
    readStream.destroy()
}

module.exports = {
    exampleGetMethod,
    examplePostMethod,
    exampleStreamMethod,
}
