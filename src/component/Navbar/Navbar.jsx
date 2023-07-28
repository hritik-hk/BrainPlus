export default function Navbar(){

    return (
        <>
         <nav className="p-3 flex justify-between md:justify-around text-base tracking-wide font-semibold">
        <div className="w-96">
            <img className="inline md:block rounded-md w-12 mr-2 md:w-20" src="./src/assets/logo.jpg" alt="logo"/>
            <span className="text-lg font-extrabold">MINDCRAFT</span>
        </div>

        <div className="hidden md:flex justify-around w-1/4">
       <div className=" hidden md:block bg-[#E55807] rounded-2xl w-32 h-fit p-3 cursor-pointer ">
            DASHBOARD
        </div>
        <div className=" hidden md:block bg-[#E55807] rounded-2xl w-32 h-fit p-3 cursor-pointer ">
            Login/Signup
        </div>
        </div>
        <div className="md:hidden">
            <a href="#" className="text-3xl">&#8801;</a>
        </div>
    </nav>
        </>

    )

}