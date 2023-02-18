const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    } 
})

// static signup method 
userSchema.statics.signup = async function(firstName, lastName, userName, email, password) {

    // validation
    if(!email || !password || !userName || !firstName || !lastName){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid') 
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password in not strong enough') 
    }

    const exists = await this.findOne({ userName })

    if(exists){
        throw Error('Username already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({firstName, lastName, userName, email, password: hash })
 
    return user
}


// static login method
userSchema.statics.login = async function(userName, password){
    // authentication
    if(!userName || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ userName })

    if(!user){
        throw Error('Username does not exists')
    }
    const firstName = user.firstName
    const lastName = user.lastName
    const email = user.email
    const username = user.userName
    const passWord = user.password

    const match = await bcrypt.compare(password, passWord)
    
    if(!match){
        throw Error('Incorrect password')
    }
    const userDetails = {firstName, lastName, email, username, passWord}
    return userDetails
}


module.exports = mongoose.model('User', userSchema)