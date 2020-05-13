const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

	order_id: {
		type:Number,
		required: true
	},
	order_date: "",
	ordered_by: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
	product_name: {
		type:String,
		required: true
	},
	product_id: {
		type: String,
		required:true
	},
	product_quantity: {
		type:Number,
		default: 1
	}
})
// const nanme = mongoose.Schema.Types.ObjectId

const Product = mongoose.model('Order',orderSchema)
console.log(mongoose.Schema.Types.product_id)
module.exports = Product


