const db = require('../db')
const User = require('../models/User')

db.on('error', console.error.bind(console, 'MongoDB connections error:'))

const main = async () =>{

const users = [
    {username: 'J.Doe', email: 'jdoe@email.com', password: 'encrpyted', sign_in_pin: 23435},
    {username: 'C.Doe', email: 'cdoe@email.com', password: 'doubleEncrpyted', sign_in_pin: 15862},
    {username: 'K.Doe', email: 'kdoe@email.com', password: 'encrpytion'}
]

await User.insertMany(users)
console.log("Created sample users")

}

const run = async () =>{
    await main()
    db.close()
}

run()