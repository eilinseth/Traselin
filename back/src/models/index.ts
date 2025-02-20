import {model,Schema} from "mongoose"
import { User } from "../types"

const userSchema : Schema = new Schema(
    {
        username : {
            type:String,
            required : true
        },
        email : {
            type :String,
            required : true
        },
        password : {
            type : String ,
            required : true
        }
    },
    {timestamps :true}
)

export default model<User>('User',userSchema)
