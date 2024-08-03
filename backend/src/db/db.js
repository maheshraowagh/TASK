const mongoose = require("mongoose");

const URI =process.env.MONGO_URI
// const URI = 'mongodb+srv://maheshwagh079:mahesh123@mern-app.uipojyu.mongodb.net/USERS'

const connectDb = async()=>{
    try {
        const mong = await mongoose.connect(URI)
console.log(`DB Host: ${mong.connection.host}`)
console.log('successfully connected')
    } catch ( error) {
        console.log(error,"MongoDb connection error")
        process.exit(1);
    }
}




module.exports = connectDb