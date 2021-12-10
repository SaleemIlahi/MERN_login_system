const jwt = require('jsonwebtoken')
const userSchema = require('../models/userSchema.js')

const Auth = async (req,res,next) => {
    try {

        const token = req.cookies.jwt
        const userVerify = jwt.verify(token,process.env.SECRET_KEY)

        
        if(!userVerify) {throw new Error('User not Found')}
        
        req.user = await userSchema.findOne({_id: userVerify.id})

        next()
        
    } catch (error) {
        res.status(401).json({
            error: 'Unauthorized'
        })
        console.log(error)
    }
}

module.exports = Auth