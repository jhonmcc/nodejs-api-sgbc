const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// insert routes
const clientRoutes = require('../src/routes/clientRoutes')
app.use('/api/client', clientRoutes)

const userRoutes = require('../src/routes/userRoutes')
app.use('/api/user', userRoutes)

app.listen(PORT, () => console.log('API is running'))