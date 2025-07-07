import user from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp=async (req,res)=>{
    try {
        const {userName,email,password }=req.body
        const checkUserByUserName=await UserActivation.findOne({userName})
        if(checkUserByUserName){
            return res.status(400).jason({massage:"user already exists"})
        }
          const checkUserByUEmail=await UserActivation.findOne({email})
        if(checkUserByUEmail){
            return res.status(400).jason({massage:"email already exists"})
        }
        if(password.length<6){
             return res.status(400).jason({massage:"password must be at 6 characters "})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const user=await User.create({
            userName,email,password:hashedPassword
        })

        
        
    } catch (error) {
        
    }
}