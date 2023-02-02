const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        sign_in_pin: {type: Number, required: false},
        score: {type: Number, required: false},
        remove_bomb: {type: Number, required: false},
        move_bomb: {type: Number, required: false},
        show_bomb: {type: Number, required: false}
    },
    {timestamp: true}
)

module.exports = mongoose.model('users', User)