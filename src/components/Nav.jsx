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
    <div className='flex md:justify-between justify-start gap-24 lg:gap-0 items-center p-[10px] bg-white border-[1px] border-gray-300 rounded-[18px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] pl-4 pr-4 navbar-expand'>
      <div className="md:hidden visible rounded-full" onClick={(e) => {
        e.preventDefault();
        setHamNav(!hamNav)
      }}>
        <span class="material-symbols-outlined">menu</span>
      </div>
      <div className='logo logo-animate'>
        <Link className="font-extrabold items-center" to="/">NotiePad</Link>
      </div>
      <div className='gap-[20px] hidden md:flex'>
        <Link to="/profile" className="flex flex-row justify-center items-center gap-2">
          <img className="h-8 w-8 rounded-full flex items-center justify-center nav-animate" src={usrimg} alt="image"/>
          <p className="items-center justify-center nav-animate font-semibold text-xl">{name}</p>
        </Link>
        <Link id="items" to="/home" className='hover:text-[#007BFF] text-[18px]  nav-animate'>Home</Link>
        <Link id="items" to="/about" className='hover:text-[#007BFF] text-[18px]  nav-animate'>About</Link>
        <Link id="items" to="/contact" className='hover:text-[#007BFF] text-[18px] nav-animate'>Contact</Link>
        <div>
          <Link id="item" to="/gt" className='p-1.5 hover:bg-red-400 hover:text-white text-[18px] rounded-md nav-animate' onClick={handleSignOut}>SignOut</Link>
        </div>
      </div> 
    </div>
  </div>
  )
}