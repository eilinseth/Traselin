import axios from "axios";

export const userLogout =async ():Promise<void> => {
    try{
        await axios.get("http://localhost:8080/logout",{withCredentials:true})
    }catch(error){
        console.error(`${error}`)
    }
}

