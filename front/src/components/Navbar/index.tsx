import About from "../../assets/svg/about.svg"
import Community from "../../assets/svg/community.svg"
import Login from "../../assets/svg/login.svg"
import Sign from "../../assets/svg/signature.svg"
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

export default function Navbar (){
    const [isOpen , setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      function handleClickOutside(event:MouseEvent){
        if(menuRef.current && !menuRef.current.contains(event.target as Node)){
          setIsOpen(false)
        }
      }
      document.addEventListener("mousedown",handleClickOutside);
      return () => removeEventListener("mousedown",handleClickOutside)
    })
    return(
        <nav className="bg-slate-100 flex justify-between h-[9%] items-center max-w-full fixed top-0 w-full z-19">
        <h1 className="text-2xl font-bold w-[40%] md:w-[15%] lg:w-[30%] mx-[5%] text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text  font-[Pacifico]"><span className='text-4xl'>T</span>raselin</h1>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={classNames(
            `fixed right-4 flex flex-col gap-1 w-8 h-8 justify-center items-center md:hidden mx-2`
          )}
        >
          <span
            className={classNames(`block w-[75%] h-1 bg-indigo-500`, {
              'transform origin-top-left rotate-45 transition': isOpen === true,
            })}
          ></span>
          <span
            className={classNames(`block w-[75%] h-1 bg-indigo-500`, {
              'scale-0 transform transition': isOpen === true,
            })}
          ></span>
          <span
            className={classNames(`block w-[75%] h-1 bg-indigo-500`, {
              'transform origin-bottom-left -rotate-45 transition':
                isOpen === true,
            })}
          ></span>
        </button>

        <div ref={menuRef}
          className={`z-[100] md:h-[9%] md:min-h-0 min-h-screen fixed top-0 right-0 w-[40%] md:w-[80%] md:gap-4 lg:gap-5 lg:w-[70%]  border-l border-indigo-200 md:border-none bg-indigo-600/60 backdrop-blur-sm md:backdrop-blur-none flex flex-col gap-6 md:bg-transparent text-black text-sm p-4 transform transition-transform md:static md:flex-row md:flex md:translate-0 md:items-center md:justify-center  md:mx-[5%] ${
            isOpen ? 'translate-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed p-1 w-[20%] right-6 top-[2.8%] font-semibold rounded-lg mb-10 text-sm bg-slate-500 text-white md:hidden font-[Poppins] "
          >
            X
          </button>

          <a href="#" className="flex gap-3 items-center  md:w-full md:pr-3 mt-15 md:mt-0 bg-slate-500  text-white font-semibold py-1 px-2 rounded-md">
            <img src={About} className="w-5 h-5 invert" />
            <p>About</p>
          </a>
          <a href="#" className="bg-red-700 flex gap-3 md:gap-2 items-center md:w-full text-white font-semibold py-1 px-2 rounded-md">
            <img src={Community} className="w-5 h-5 invert" />
            <p>Community</p>
          </a>
          <a
            href="#"
            className="bg-green-700 flex gap-3 items-center md:w-full text-white font-semibold py-1 px-2 rounded-md"
          >
            <img src={Login} className="w-5 h-5 invert" />

            <p>Login</p>
          </a>
          <a
            href="#"
            className="bg-gray-700 flex gap-3 items-center md:w-full text-white font-semibold py-1 px-2 rounded-md"
          >
            <img src={Sign} className="w-5 h-5 invert" />

            <p>Register</p>
          </a>
        </div>
      </nav>
    )
}