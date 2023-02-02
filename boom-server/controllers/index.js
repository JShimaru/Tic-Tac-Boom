require('dotenv').config()

const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const createUser = async (req,res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPwd = await bcrypt.hash(req.body.password, salt)
        // const hashedPin = await bcrypt.hash(req.body.sign_in_pin, salt)
        // const hashedEmail = await bcrypt.hash(req.body.email, salt)
        console.log(salt)
        console.log(hashedPwd)
        // console.log(hashedPin)
        // console.log(hashedEmail)
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPwd
        })
        await user.save()
        return res.status(201).json({user})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const login = async (req,res) => {
    const submission = req.body.password;
    // console.log(submission)
    const email = req.body.email
    // console.log(email)
    const user = User.find(user => user.email = email)
    const password = JSON.stringify(user.password)
    console.log(password)
    if(user.email == null || user.email == undefined){
        return res.status(400).send('Cannot find user!')
    }
    try{
        let match = await bcrypt.compare(submission, password) 
        if(!match){
            res.send('Login denied')
            console.log('Failed')
        }else{
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.json(user.username, accessToken)
            console.log('Success')
        }
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const getAllUsers = async (req,res) => {
    try{
        const users = await User.find()
        return res.status(200).json({users})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const userById = async (req,res) => {
    try{
        const {id} = req.params
        const user = await User.findById(id)
        if(user){
            return res.status(200).json({user})
        }
        return res.status(404).send('Specified user does not exist!')
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const updateUser = (req,res) => {
    try{
        const {id} = req.params
        User.findByIdAndUpdate(id, req.body, {new: true}, (err,item) =>{
            if(err){
                res.status(500).send(err)
            }
            if(!user){
                res.status(500).send('User not found')
            }
            return res.status(200).json(user)
        })
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const deleteUser = async (req,res) => {
    try{
        const {id} = req.params
        const deleted = await User.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("User deleted!")
        }
        throw new Error("User not found!")
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

module.exports ={
    createUser,
    getAllUsers,
    userById,
    updateUser,
    deleteUser,
    login
}