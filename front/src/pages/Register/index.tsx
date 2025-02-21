import { NavLink } from "react-router-dom"
import {useForm } from "react-hook-form"
import { UserBody } from "../../types"
import {getUsers} from "../../api/getUsers"
import {userRegister} from "../../api/Register"
import { useQuery,useMutation,useQueryClient } from "react-query"
 
export default function Register (){
    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<UserBody>()

    const queryClient = useQueryClient()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const query = useQuery('users',getUsers)
    const mutation = useMutation(userRegister,{
        onSuccess : () =>{
            queryClient.invalidateQueries('users')
            reset()
            alert("Register Success")
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        },onError: (error:any) =>{
            alert(error.message)
        }
    })

    const onSubmit = (data:UserBody) => {
        mutation.mutate(data)
    }
    return (
        <div className="mx-auto w-full px-[7%]  min-h-screen bg-slate-100 p-5 py-20 flex justify-center items-center flex-col">
            <h1 className=" text-2xl font-bold mb-10 md:mt-10">Create Account</h1>
            <form className=" font-semibold flex justify-center items-center flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username : </label>
                    <input {...register("username",{required:"Username must be filled",maxLength:20,minLength:5})} type="text" id="username" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"/>
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email : </label>
                    <input {...register("email",{required:"Email must be filled"})} type="email"   id="email" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"/>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password :</label>
                    <input {...register("password",{required:"Password must be filled"})} type="password"  id="password" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"/>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                </div>

                <button type="submit" className="p-2 bg-indigo-500 text-white font-bold w-40 cursor-pointer border-2 border-black mt-5 rounded-xl">{mutation.isLoading ? "Registering" : "Register"}</button>
            </form>
            <p className="mt-5 -mb-4 font-bold">Have an account ? </p>
            <NavLink to="/login" className="p-2 text-center bg-green-500 text-white font-bold w-40 cursor-pointer border-2 border-black mt-5 rounded-xl">Login</NavLink>
        </div>
    )
}