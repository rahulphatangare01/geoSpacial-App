const jwt = require('jsonwebtoken')
const jwt_secrate = process.env.JWTPRIVATEKEY;

const authuser = (req,res,next) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(401).json({message:"Plaese authincate using valid token"})

    }
    // if toke present 
    try {
        const data = jwt.verify(token, jwt_secrate)
        req.user = data.user
        next()
        
    } catch (error) {
        console.error(error)
        return res.status(401).json({message:"Plaese authincate using valid token"})
    }
    

}
module.exports = authuser;