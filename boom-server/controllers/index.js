const User = require('../models/User')

const createUser = async (req,res) => {
    try{
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({user})
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
    deleteUser
}