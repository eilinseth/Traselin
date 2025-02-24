import axios from "axios";
import { LoginBody } from "../../types";

export const userLogin = async(data:LoginBody):Promise<void> => {
    try{
        
        const res = await axios({
            method : "POST",
            url : "http://localhost:8080/login",
            data ,
            headers : {
                "Content-Type" : "application/json"
            }
        })
        
        return res.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error:any){
        console.error("Login Error ", error.response)
        throw new Error(error.response?.data?.message)
    }
}

