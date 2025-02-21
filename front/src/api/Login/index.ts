import axios from "axios";
import { LoginBody } from "../../types";

const Login = async(data:LoginBody):Promise<void> => {
    try{
        await axios({
            method : "POST",
            url : "http://localhost:8080/login",
            data
        })
    }catch(error){
        throw new Error(`${error}`)
    }
}

export default Login