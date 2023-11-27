import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'admin',
		email: 'admin@test.com',
		password: bcrypt.hashSync('12345', 10), 
	},
	// Standard users
	{
		name: 'user1',
		email: 'user1@gmail.com',
		password: bcrypt.hashSync('12345', 10),
	}
]

export default users
