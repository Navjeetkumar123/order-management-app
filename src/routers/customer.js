const express = require('express')
const mongoose = require('mongoose')
const Customer = require('../models/customer')
const Order = require('../models/order')
const router = new express.Router()


router.post('/createCustomer' , async (req,res) => {
	const customer = new Customer(req.body)
	try {
		await customer.save()
		res.status(201).send(customer)
	} catch(e){
		res.status(400).send(e)
	}
})

router.post('/order', async (req,res) => {
	console.log("order")
	const order = new Order({
		order_id: req.body.order_id,
		order_date: new Date(),
		ordered_by: req.body.ordered_by,
		product_name: req.body.product_name,
		product_id: req.body.product_id,
		product_quantity:req.body.product_quantity
	})
	console.log(order)
	try{
		await order.save()
		res.status(201).send(order)
	}catch(e){
		res.status(400).send(e)
	}
})

router.get('/getCustomer' , async (req,res) => {
	console.log("inside getCustomer")
	res.send('get customer')
})
module.exports = router


// const product = new Product({
// 		product_id: new Date().getTime(),
// 		product_name: req.body.product_name,
// 		product_price: req.body.product_price
// 	})


