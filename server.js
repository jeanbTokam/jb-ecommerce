const express = require('express')
const app = express()
const connectionDB = require('./db')
const productsRoute = require('./routes/productsRoute')
app.use(express.json());





app.use('/api/products/' , productsRoute)



const port = 8000
app.listen(port, () => console.log(`JB-Ecommerce Server listening on port ${port}!`))