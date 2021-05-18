const express = require('express')
const app = express()

app.use(express.json())

// insert routes
const clientRoutes = require('../src/routes/clientRoutes')
app.use('/api/clients', clientRoutes)

app.listen(3000, () => {
    console.log('API is running')
})