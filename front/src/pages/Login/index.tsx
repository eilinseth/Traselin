import { NavLink ,useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { LoginBody } from '../../types';
import {userLogin} from "../../api/Login"

export default function Login() {
    const {
        register,
        reset,
        handleSubmit,
        formState : {errors}
    } = useForm<LoginBody>()

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const mutation = useMutation(userLogin,{
        onSuccess : () => {
            queryClient.invalidateQueries('users')
            reset()
            alert("Login Success")
            navigate("/*")
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError : (error:any) =>{
            alert(error.message)
        }
    })

    const onSubmit = (data:LoginBody) => {
        
        mutation.mutate(data)
    }
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-20 p-5 gap-10 bg-slate-100">
      <h1 className="text-2xl font-bold md:mt-5">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-5"
      >
        <div className="flex flex-col gap-2 font-semibold">
          <label htmlFor="email">Email or Username: </label>
          <input {...register("userOrEmail",{required:"Input your email or username"})}
            type="text"
            className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"
          />
          {errors.userOrEmail && <p className='text-red-500'>{errors.userOrEmail.message}</p>}
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <label htmlFor="password">Password : </label>
          <input {...register("password",{required:"Input your password"})}
            type="password"
            className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>
        <button
          className="cursor-pointer p-2 w-40 bg-green-500 mt-5 rounded-xl text-white font-bold border-2 border-black"
          type="submit"
        >
          {mutation.isLoading ? "Login..." : "Login"}
        </button>
      </form>
      <NavLink to="/reset" className="-mt-5 font-bold">
        Reset Password
      </NavLink>
      <NavLink
        to="/register"
        className="cursor-pointer p-2 w-40 bg-indigo-500 -mt-5 rounded-xl text-white font-bold border-2 border-black text-center"
        type="submit"
      >
        Register
      </NavLink>
    </div>
  );
}
