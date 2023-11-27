import express from 'express'
const router = express.Router()
import {
	getProducts,
	getProductById,
	getTopProducts,
	getBrands
} from '../controllers/productController.js'
import {
	createProduct,
	deleteProduct,
} from '../controllers/adminController.js'
import { auth, admin } from '../middleware/authMiddleware.js'

router.route('/')
.get(getProducts)
.post(auth, admin, createProduct)

router.route('/')
.get(getBrands)

router.get('/top', getTopProducts)

router
	.route('/:id')
	.get(auth,getProductById)
	.delete(auth, admin, deleteProduct)

export default router
