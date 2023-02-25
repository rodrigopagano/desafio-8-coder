const UserModel = require('../dao/models/user.model');

class sessionManagerDB{
    getSession = async (UserEmail,password) => {
        return await UserModel.findOne({UserEmail,password});
    }
}

createsession = async (firstName,lastName,UserEmail,password) =>{
    return await UserModel.create({firstName,lastName,UserEmail,password})
}

module.exports = new sessionManagerDB