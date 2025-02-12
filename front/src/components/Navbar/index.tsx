import classNames from "classnames";
import { useState } from "react";

export default function Navbar (){
    const [isOpen , setIsOpen] = useState(false)
    return(
        <nav className="bg-slate-50 flex justify-between h-[9%] items-center max-w-full">
        <h1 className="text-2xl font-bold mx-[5%] text-sky-500 font-[Pacifico]"><span className='text-3xl'>T</span>raselin</h1>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={classNames(
            `fixed right-4 flex flex-col gap-1 w-8 h-8 justify-center items-center md:hidden mx-2`
          )}
        >
          <span
            className={classNames(`block w-[75%] h-1 bg-sky-500`, {
              'transform origin-top-left rotate-45 transition': isOpen === true,
            })}
          ></span>
          <span
            className={classNames(`block w-[75%] h-1 bg-sky-500`, {
              'scale-0 transform transition': isOpen === true,
            })}
          ></span>
          <span
            className={classNames(`block w-[75%] h-1 bg-sky-500`, {
              'transform origin-bottom-left -rotate-45 transition':
                isOpen === true,
            })}
          ></span>
        </button>

        <div
          className={`z-10 fixed top-0 right-0 w-[40%] h-full border-l-2 border-sky-300 md:border-none  bg-slate-300 flex flex-col gap-6 md:bg-transparent text-black text-sm p-4 transform transition-transform md:static md:flex-row md:flex md:translate-0 md:items-center md:justify-end md:gap-8 md:mx-[5%] ${
            isOpen ? 'translate-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed p-1 w-[20%] right-6 top-[9px] font-semibold rounded-lg mb-10 text-sm bg-red-500 text-white md:hidden font-[Poppins] "
          >
            X
          </button>

          <a href="#" className="md:w-fit mt-15 md:mt-0 bg-slate-500  text-white font-semibold py-1 px-2 rounded-md">
            About
          </a>
          <a href="#" className="bg-red-700  md:w-fit text-white font-semibold py-1 px-2 rounded-md">
            Community
          </a>
          <a
            href="#"
            className="bg-green-700  md:w-fit text-white font-semibold py-1 px-2 rounded-md"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-gray-700  md:w-fit text-white font-semibold py-1 px-2 rounded-md"
          >
            Register
          </a>
        </div>
      </nav>
    )
}