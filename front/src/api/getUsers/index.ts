import axios from "axios";
import { Users } from "../../types";

export const getUsers = async():Promise<Users> =>{
    try{
        const res = await axios.get("http://localhost:8080/all")
        if(!res){
            console.log("Failed to fetch data")
            throw new Error
        }
        return res.data
    }catch(error){
        throw new Error(`${error}`)
    }
}

