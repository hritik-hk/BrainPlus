import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="bg-[#111111]  text-white w-full p-2 flex justify-between md:justify-around text-base tracking-wide font-semibold">
        <Link to="/">
          <div className="w-64">
            <img
              className="inline md:block rounded-md w-12 mr-2 md:w-20"
              src="./src/assets/logo.jpg"
              alt="logo"
            />
            <span className="text-lg font-extrabold">MINDCRAFT</span>
          </div>
        </Link>

        <div className="hidden md:flex justify-around items-center w-1/4">
          <div className=" hidden md:block bg-[#E55807] rounded-2xl w-32 h-fit p-3 cursor-pointer ">
            <Link to="/dashboard">DASHBOARD</Link>
          </div>
          <div className=" hidden md:block bg-[#E55807] rounded-2xl w-32 h-fit p-3 cursor-pointer ">
            <Link to="/login">Login/Signup</Link>
          </div>
        </div>
        <div className="md:hidden">
          <a href="#" className="text-3xl">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
}
