import { NavLink } from "react-router-dom";

export default function Login (){
    return(
        <div className="flex flex-col items-center w-full min-h-screen py-20 p-5 gap-10 bg-slate-100">
            <h1 className="text-2xl font-bold md:mt-5">Login</h1>
            <form action="" className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800" />
                </div>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800" />
                </div>
                <button className="cursor-pointer p-2 w-40 bg-green-400 mt-5 rounded-xl text-white font-bold border-2 border-black" type="submit">Login</button>
            </form>
            <NavLink to="/reset" className="-mt-5 font-bold">Reset Password</NavLink>
            <NavLink to="/register" className="cursor-pointer p-2 w-40 bg-indigo-400 -mt-5 rounded-xl text-white font-bold border-2 border-black text-center" type="submit">Register</NavLink>
            
        </div>
    )
}