const mongoose = require('mongoose');
const UserCollection = ('users');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    UserEmail:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    

})

const UserModel = mongoose.model(UserCollection,UserSchema);

module.exports = UserModel