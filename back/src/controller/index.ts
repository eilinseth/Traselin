import { Request,Response } from "express";
import UserModel from "../models"
import {User} from "../types"
import bcrypt from "bcryptjs"

const getUsers = async (req:Request,res:Response):Promise<void> => {
    try {
        const data:User[] = await UserModel.find()
        res.status(200).json({
            status : "200",
            message : "Ok",
            data
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
        if(!username || !email || !password){
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

        await newUser.save()
        res.status(200).json({
            status : 200,
            message : "created",
            added : {
                id : newUser._id,
                username : newUser.username,
                email : newUser.email
            }
        }
        )
    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status : 500,
            message :"Internal Server Error"
        })
    }
}

export {getUsers,register}