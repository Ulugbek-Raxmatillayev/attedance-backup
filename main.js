const express = require('express')
const app = express()

app.use(express.json());

const port = process.env.port || 5001
app.listen(port, () => {
    console.log(`I listened ${port}th port with success...`)
})
