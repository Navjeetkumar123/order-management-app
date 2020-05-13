const express = require('express')
const Product = require('../models/product')
const router = new express.Router()

router.post('/createproduct' , async (req,res) => {
	console.log("createproduct")
	
	const product = new Product({
		product_id: new Date().getTime(),
		product_name: req.body.product_name,
		product_price: req.body.product_price
	})
	console.log(product)
	try{
		await product.save()
		res.status(201).send(product)
	}catch(e){
		res.status(400).send(e)
	}
})

router.get('/getProduct' , async (req,res) => {
	console.log("inside getProduct")
	res.send('get Product')
})
module.exports = router


// const product = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price
//   });


