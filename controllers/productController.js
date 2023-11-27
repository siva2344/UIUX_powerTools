import asyncHandler from 'express-async-handler'
import {Product,Reviews,Brands,Categories,Inventory,Discounts} from '../models/productModel.js'

// Fetch all products for HomePage
const getProducts=asyncHandler(async (req, res) => {
	const pageSize=5
	const page=Number(req.query.pageNumber)||1
	const keyword=req.query.keyword?
	{productName: {
		$regex: req.query.keyword,
		$options: 'i',
	},}
	: {}
	const count = await Product.countDocuments({ ...keyword })
	const products = await Product.find({ ...keyword })
	.limit(pageSize)
	.skip(pageSize * (page - 1))
	res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// Fetch single product on selection
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)
	if (product) {
		res.json(product)
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// Get top rated products
const getTopProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(3)
	res.json(products)
})

const getBrands=asyncHandler(async(req,res)=>{
	const brands=await Brands.find({})
	res.json(brands)
})

export {
	getProducts,
	getProductById,
	getTopProducts,
	getBrands
}


