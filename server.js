import express from 'express'
import dotenv from 'dotenv'
import { invalidRoutehandler, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/orders', orderRoutes)
app.use('/upload', uploadRoutes)

app.get('/health', (req, res) => {
	res.send('Service is up and running...')
	})

app.use(invalidRoutehandler)

app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
