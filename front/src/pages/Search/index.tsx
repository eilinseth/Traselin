import SearchIcon from "../../assets/svg/search.svg"

export default function Search(){
    return(
        <div className="pb-20 mx-auto px-[4%] bg-[url('background/background.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center flex-wrap">
            <div className=" w-[70%] h-[10%] mt-20 mx-auto p-2 ">
                <div className="flex items-center p-2 bg-gray-100 rounded-xl gap-2">
                    <img src={SearchIcon} className="h-4 w-4 " />
                   <input type="search" className="text-slate-900  w-[30rem] p-1 pl-2" placeholder="Search here ..." />
                </div>
                
            </div>
            <div className=" grid md:grid-cols-3 grid-cols-2 items-center gap-4 w-full mt-10">
                <div className="bg-white h-80">awd</div>
                <div className="bg-white h-80">awd</div>
                <div className="bg-white h-80">awd</div>
            </div>
            


        </div>
    )
}