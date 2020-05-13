const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

	product_id: "",
	product_name: {
		type: String,
		required:true
	},
	product_price: {
		type: Number,
		required: true
	}
})


const Product = mongoose.model('Product',productSchema)
module.exports = Product


