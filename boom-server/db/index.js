const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:/boomUsers', {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(()=>{
    console.log('Connection to MongoDB Successful!');
}).catch((e)=>{
    console.error('Connection error', e.message);
})

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db