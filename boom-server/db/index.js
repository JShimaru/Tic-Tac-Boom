const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb+srv://Jirama:DatabaseConnect@cluster0.kiculqi.mongodb.net/boomUsers' || 'mongodb://127.0.0.1:/boomUsers'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(()=>{
    console.log('Connection to MongoDB Successful!');
}).catch((e)=>{
    console.error('Connection error', e.message);
})

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db