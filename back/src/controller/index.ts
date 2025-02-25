import { Request,Response } from "express";
import UserModel from "../models"
import {User} from "../types"
import bcrypt from "bcryptjs"

const getUsers = async (req:Request,res:Response):Promise<void> => {
    try {
        const users:User[] = await UserModel.find().select('_id username email')
        
        
        res.status(200).json({
            status : "200",
            message : "Ok",
            data : users
        })

    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status : 500,
            message :"Internal Server Error"
        })
    }
}

const register = async (req:Request,res:Response):Promise<void> => {
    try {
        const {username,email,password} = req.body
        console.log(req.body)
        if(!username && !email && !password){
             res.status(400).json({
                status : "400",
                message : "Bad Request - Missing fields"
            })
            return
        }

        const hashedPassword = await bcrypt.hash(password,10)


        const newUser = new UserModel({
            username ,
            email  ,
            password : hashedPassword
        })

        const sameUser =await UserModel.findOne({$or:[{username:newUser.username},{email:newUser.email}]})
        if(sameUser){
             res.status(400).json({
                status : 400,
                message : "Same username or email has already registered"
            })
            return
            
        }else{

            await newUser.save()
            res.status(200).json({
                status : 200,
                message : "created",
                added : {
                    id : newUser._id,
                    username : newUser.username,
                    email : newUser.email
                }}
            )}
    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status : 500,
            message :"Internal Server Error"
        })
    }
}

const login = async (req:Request,res:Response):Promise<void> => {
    try{
        const {userOrEmail,password} = req.body
        const userMail = await UserModel.findOne({$or:[{email:userOrEmail},{username:userOrEmail}]})
        if(!userMail){
            res.status(404).json({
                status : 404 ,
                message : "Username or Email not found"
            })
        }else{
           const match = await bcrypt.compare(password , userMail.password)
           if(match){
            console.log("Login Success")
            res.status(200).json({
                status:200,
                message : "Login Success"
            })
           }else{
            console.log("Login Failed")
            res.status(401).json({
                status : 401,
                message : "Wrong password"
            })
           }
        }
    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status : 500,
            message : "Internal Server Error"
        })
    }
}

export {getUsers,register,login}