import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Delete single product
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)
	if (product) {
		await product.remove()
		res.json({ message: 'Product removed' })
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

//Create a product
const createProduct=asyncHandler(async(req,res)=>{
    const { name, brand, desc, price, image } = req.body;
    try {
      if (image) {
        const uploadedResponse = await cloudinary.uploader.upload(image, {
          upload_preset: "online-shop",
        });
        if (uploadedResponse) {
          const product = new Product({
            name,
            brand,
            desc,
            price,
            image: uploadedResponse,
          });
  
          const savedProduct = await product.save();
          res.status(200).send(savedProduct);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

export {
	deleteProduct,
	createProduct
}