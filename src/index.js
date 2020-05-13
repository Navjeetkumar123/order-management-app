const express = require('express')
require('./db/mongoose')
const cutomerRouter = require('./routers/customer')
const productRouter = require('./routers/product')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cutomerRouter)
app.use(productRouter)

app.listen(port, () => {

	console.log('server is running on port '+port)
})

// const Product = require('./models/productModel')
// const Customer = require('./models/customerModel')
