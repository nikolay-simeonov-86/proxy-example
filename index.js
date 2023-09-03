const app = require('./src/app')
const host = process.env.HOST
const port = process.env.PORT

app.listen(port, host, () => {
    console.info(`Starting Proxy at ${host}:${port}`);
})