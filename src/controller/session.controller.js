const sessionManagerDB = require('../dao/sessionManager')

const sessionLogin = async (req,res) => {
    try{
        const {UserEmail, password} = req.body
        const user = await sessionManagerDB.getSession(UserEmail,password)
        if(!user){
            return res.status(401).json({
                msg:'contraseña o usuario incorrectos',
                ok:false
            })
        }
    }catch(error){
        res.status(500).json({
            msg:'error',
            payload: error.message,
        })
    }
}

const registerLogin = async (req,res) =>{
    try{
        console.log(req.body)
        const {firstName,lastName,UserEmail,password} = req.body
        console.log(firstName)
        console.log(lastName)
        console.log(UserEmail)
        console.log(password)

        const userRegister = await sessionManagerDB.createSession(firstName,lastName,UserEmail,password)
        return res.send(userRegister)
    }catch(error){
        return res.status(500).json({
            msg:'error',
            payload:error.message
        })
    }

}

module.exports = {
    sessionLogin,
    registerLogin
}