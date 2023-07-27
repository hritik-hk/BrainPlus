export default function Navbar(){

    return (
        <>
         <nav className="m-5 flex justify-between md:justify-around text-base tracking-wide font-semibold">
        <div>
            <img className="rounded-full w-10 md:w-20" src="./src/assets/logo.svg" alt="logo"/>
        </div>
       
        <div className=" hidden md:block bg-slate-500 rounded-2xl w-32 p-3 cursor-pointer">
        <div>
            Dashboard
        </div>
            Login/Signup
        </div>
        <div className="md:hidden">
            <a href="#" className="text-3xl">&#8801;</a>
        </div>
    </nav>
        </>

    )

}