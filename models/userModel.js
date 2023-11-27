import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// Create User Schema
const userSchema = mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		address:{
			type:mongoose.Schema.Types.ObjectId,ref:"Address"
		}
	},
	{
		timestamps: true,
	}
)


const User = mongoose.model('User', userSchema)

export default User
