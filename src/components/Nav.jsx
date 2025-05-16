import React , {useState}  from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
export default function Nav() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name')
  const usrimg = localStorage.getItem('usrimg')
  const [hamNav , setHamNav] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('name');
      localStorage.removeItem('usrimg');
      navigate('/gt');
      toast.success("Sign out successful");
    } catch (error) {
      console.error("Error signing out: ", error);
      toast.error("Error signing out");
    }
  }
  return(
  <div className='fixed top-0 left-0 right-0 z-10 flex justify-center items-center p-4 '>
    <div className='flex justify-between items-center w-full max-w-5xl p-[10px] bg-white border-[1px] border-gray-300 rounded-[18px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-4'>

      <div className="flex items-center md:hidden">
        <div className="rounded-full mr-2" onClick={(e) => {
          e.preventDefault();
          setHamNav(!hamNav);
        }}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>

      <div className="text-center flex-grow">
        <Link className="font-extrabold text-lg" to="/ho">NotiePad</Link>
      </div>

      <div className="flex items-center">
        <Link to="/profile" className="flex items-center gap-2">
          <img className="h-8 w-8 rounded-full nav-animate" src={usrimg} alt="Profile" />
        </Link>
      </div>

      {hamNav && (
        <div className={`absolute top-[70px] left-9 bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col gap-2 z-50 block md:hidden transition-all duration-300 ease-out transform origin-top ${hamNav ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Link to="/home" className="hover:text-[#007BFF] text-[16px]">Home</Link>
          <Link to="/about" className="hover:text-[#007BFF] text-[16px]">About</Link>
          <Link to="/contact" className="hover:text-[#007BFF] text-[16px]">Contact</Link>
          <button
            onClick={handleSignOut}
            className="text-red-500 hover:text-white hover:bg-red-500 px-3 py-1 rounded text-[16px]"
          >
            Sign Out
          </button>
        </div>
      )}

      <div className="gap-[20px] hidden md:flex">
        <div className="flex flex-col justify-center items-center gap-2">
          <Link to="/profile" className="flex flex-row justify-center items-center gap-2">
            <img className="h-8 w-8 rounded-full flex items-center justify-center nav-animate" src={usrimg} alt="image"/>
          </Link>
        </div>
        <div className="bg-white rounded-lg p-2 flex flex-row gap-2 z-50">
          <Link to="/home" className="hover:text-[#007BFF] text-[16px]">Home</Link>
          <Link to="/about" className="hover:text-[#007BFF] text-[16px]">About</Link>
          <Link to="/contact" className="hover:text-[#007BFF] text-[16px]">Contact</Link>
          <button
            onClick={handleSignOut}
            className="text-red-500 hover:text-white hover:bg-red-500 px-3 rounded text-[16px]"
          >
            Sign Out
          </button>
        </div>
      </div> 
    </div>
  </div>
  )
}