import { User } from '../Models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//signup --api
export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      return res.status(400).json({
        status: false,
        message: 'All Fields are Required.'
      })
    }

    // Check if user already exists using separate queries
    const [existingUserByUsername, existingUserByEmail] = await Promise.all([
      User.findOne({ username }),
      User.findOne({ email })
    ])

    if (existingUserByUsername || existingUserByEmail) {
      return res.status(400).json({
        success: false,
        message: 'Username or email already exists'
      })
    }

    const hashedPass = await bcrypt.hash(password, 5)
    // const hashedEmail = await bcrypt.hash(email,5)
    const newUser = new User({ username, email, password: hashedPass })
    await newUser.save()
    console.log('Account Created Successfully')

    return res.status(200).json({
      status: true,
      message: 'Account Created Successfully'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

//login --api
export const signinUser = async (req, res) => {
  const { email, password } = req.body
  //if user leave one input
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: 'Something is Missing..'
    })
  }
  //compare existing email
  const existingUser = await User.findOne({ email })
  if (!existingUser) {
    return res.status(400).json({
      status: false,
      message: 'Invalid Credentials'
    })
  }

  //compare pass
  const checkPass = await bcrypt.compare(password, existingUser.password)
  if (!checkPass) {
    return res.status(400).json({
      status: false,
      message: 'Invalid Credentials'
    })
  }
  const token = jwt.sign(
    {
      id: existingUser._id,
      email: existingUser.email
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '30d' }
  )
  res.cookie('jsinsights_login_Cookie', token, {
    httpOnly: true,
    message: 30 * 24 * 60 * 60 * 1000, //30 days
    secure: true,
    sameSite: 'None'
  })

  console.log('Account Login Successfully')
  return res.status(200).json({
    status: true,
    message: 'Login Successfully'
  })
}

//get user information
export const getUserInfomation = async (req, res) => {
  try {
    const { username, email } = req.body
    const data = await User.findOne(username).select('-password')
    return res.status(200).json({
      userData: data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

export const checkCooke = async (req, res) => {
  try {
    const token = req.cookies.jsinsights_login_Cookie
    
    if (token) {
      return res.status(200).json({
        message: true
      })
    }
    return res.status(400).json({
      message: false
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'internal Server Error'
    })
  }
}
