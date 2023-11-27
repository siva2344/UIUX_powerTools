// Error middleware for 404
const invalidRoutehandler = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalUrl}`)
	res.status(404)
	next(error)
}

// Error handler middleware
const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({message: err.message})
}

export { invalidRoutehandler, errorHandler }
