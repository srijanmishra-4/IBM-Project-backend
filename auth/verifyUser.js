const { generateToken } = require('../utils/generateToken')

const User = require('../model/user')

async function verifyUser(email, password) {
  console.log(email,password)
    try {
  
      const user = await User.findOne({ email: String(email) });
      console.log(user)
      if (!user) {
        return { status: 404, message: 'User does not exist' };
      }
  
      if (user.password !== password) {

        return { status: 401, message: 'Invalid password' };
      }
    
      const token = generateToken(user.name ,user.email , user.userId);

      return { status: 200, token };
  
    } catch (error) {
      return { status: 500, message: 'Internal server error' };
    }
  }
  
  module.exports = { verifyUser };