
const userModel = require('../models/userSchema.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class userController {
    static register = async (req, res) => {
        try {
            const { name, number, email, password } = req.body
            const passwordHash = await bcrypt.hash(password,10)
            if (name || number || email || password) {
                const user = await userModel.findOne({ email: email })
                if (!user) {
                    const userDetails = new userModel({
                        name,
                        number,
                        email,
                        password: passwordHash
                    })
                    const userRegister = await userDetails.save()

                    if (userRegister) {
                        res.status(201).json({
                            message: 'Register Successfully',
                            data: userDetails
                        })
                    }
                } else {
                    res.status(422).json({
                        message: 'Email is Already Registered'
                    })
                }
            } else {
                res.status(422).json({
                    message: 'Fill all fields properly'
                })
            }

        } catch (err) {
            res.status(422).json({
                error: 'Your Already Register'
            })
        }
    }

    static login = async (req, res) => {
        try {
            const {email, password } = req.body
            if (email || password) {
                const user = await userModel.findOne({ email: email })
                if (user) {
                    const isMatch = bcrypt.compare(password,user.password)

                    const token = jwt.sign({id: user._id},process.env.SECRET_KEY)

                    
                    // Storing in Cookies
                    res.cookie('jwt',token,{
                        expires: new Date(new Date().getTime()+5*60*1000),
                        httpOnly: true
                    })
                    if(isMatch){
                        res.status(201).json({
                            message: 'Login Successful'
                        })
                    }else{
                        res.status(422).json({
                            message: 'Invalid Email or Password'
                        })
                    }
                } else {
                    res.status(422).json({
                        message: 'Invalid Email or Password'
                    })
                }
            } else {
                res.status(422).json({
                    message: 'Fill all fields properly'
                })
            }} catch (error) {
                console.log(error)
            }
        }

        static home = (req,res) => {
            res.json(req.user)
        }

        static logout = (req,res) => {
            res.clearCookie('jwt')
            res.status(200).json({
                message: 'you logout'
            })
        }
}

module.exports = userController