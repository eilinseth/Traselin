import axios from "axios"
import { UserBody } from "../../types"

export const userRegister = async (data:UserBody):Promise<void> =>{
    try{
       const response = await axios({
            method : "POST",
            url : "http://localhost:8080/register",
            data
        })
        
        return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error:any){
        throw new Error(error.response?.data?.message)
    }
}

