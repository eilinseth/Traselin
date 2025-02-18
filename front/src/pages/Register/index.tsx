import { NavLink } from "react-router-dom"

export default function Register (){
    return (
        <div className="mx-auto w-full px-[7%]  min-h-screen bg-slate-100 p-5 py-20 flex justify-center items-center flex-col">
            <h1 className=" text-2xl font-bold mb-10 md:mt-10">Create Account</h1>
            <form action="" className=" font-semibold flex justify-center items-center flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username : </label>
                    <input type="text" name="username" id="username" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email : </label>
                    <input type="email"  name="email" id="email" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password" id="password" className="rounded-xl p-1 w-70 bg-slate-100 border-2 text-slate-800"/>
                </div>

                <button className="p-2 bg-indigo-500 text-white font-bold w-40 cursor-pointer border-2 border-black mt-5 rounded-xl">Register</button>
            </form>
            <p className="mt-5 -mb-4 font-bold">Have an account ? </p>
            <NavLink to="/login" className="p-2 text-center bg-green-500 text-white font-bold w-40 cursor-pointer border-2 border-black mt-5 rounded-xl">Login</NavLink>
        </div>
    )
}