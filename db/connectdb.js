
const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('connected successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectdb