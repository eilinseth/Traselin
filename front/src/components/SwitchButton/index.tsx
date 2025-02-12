import { useState } from "react"
import House from "../../assets/svg/house.svg"
import Search from "../../assets/svg/search.svg"
import classNames from "classnames"

export default function SwitchButton (){
    const [isActive , setIsActive] = useState("home")


    return (
        <div className="md:hidden fixed bottom-0 w-full bg-slate-200 h-[9%] flex items-center justify-center ">
            <button onClick={()=>setIsActive("home")} className={classNames("w-[50%] border-r-2 border-black flex items-center justify-center h-full cursor-pointer",{
                "bg-sky-400" : isActive === "home"
            })}>
                <img src={House} className="w-20 h-7 "/>
            </button>
            <button onClick={()=>setIsActive("search")} className={classNames("w-[50%] flex items-center justify-center h-full cursor-pointer",{
                "bg-sky-400" : isActive === "search"
            })}>
                <img src={Search} className="w-20 h-8" />
            </button>
        </div>
    )
}