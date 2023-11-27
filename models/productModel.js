import mongoose from 'mongoose'

const brandSchema=new mongoose.Schema(
	{
	brandName:{type:String, required:true},
	brandLogo:{type:String,required:true},
	brandDesc:{type:String,required:true}
   },{
	timestamps: true,
})

const productSchema = mongoose.Schema(
	{
		productName: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Brands'
		},
		category_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Categories'
		},
		inventory_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Inventory'
		},
		discount_id:{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Inventory'
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [{ type: mongoose.Types.ObjectId, ref: 'Reviews' }],
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

const inventorySchema = new mongoose.Schema({
	SKU:{type:String,required:true},
	original_price: {
        type: Number,
		required: true
    },
    sale_price: {
        type: Number,
    },
	vehicleType:{type:[String],required:true},
	quantity: {
		type: Number,
		required: true,
		default: 0,
	}},
	{ timestamps: true } )
	
const productCategorySchema= new mongoose.Schema({
	categoryName:{type:String,required:true},
	catDesc:{type:String,required:true}
},
{
	timestamps: true,
})

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		user: {
			type: mongoose.Schema.Types.ObjectId, 
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)
const discountSchema= new mongoose.Schema({
	saleName:{type:String,required:true},
	saleDesc:{type:String,required:true},
	discountPercent:{type:Number,required:true},
	active:{type:Boolean, required:true}
},{
	timestamps: true,
})

const Reviews=mongoose.model('Reviews',reviewSchema)
const Brands = mongoose.model("Brands", brandSchema)
const Product = mongoose.model('Product', productSchema)
const Categories=mongoose.model('Categories',productCategorySchema)
const Inventory=mongoose.model('Inventory',inventorySchema)
const Discounts=mongoose.model('Discounts',discountSchema)

export {Product,Reviews,Brands,Categories,Inventory,Discounts}


