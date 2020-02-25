const express = require('express')
const app = express()
const PORT = 3000

const setupDB = require('./config/database')
const routes = require('./config/routes')

app.use(express.json())
app.use('/', routes)

//configuration of dB
setupDB()

app.listen(PORT, () => {
    console.log('listening to port ',PORT)
})