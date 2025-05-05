import React  from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Nav() {
  return(
  <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 '>
    <div className='flex justify-between items-center p-[10px] bg-white border-[1px] border-gray-300 rounded-[12px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] navbar-expand'>
      <div className='logo logo-animate'>
      <Link className="font-extrabold" to="/">NotiePad</Link>
      </div>
      <div className='flex gap-[20px]'>
        <Link id="items" to="/home" className='hover:text-[#007BFF] text-[18px] nav-animate'>Home</Link>
        <Link id="items" to="/about" className='hover:text-[#007BFF] text-[18px] nav-animate'>About</Link>
        <Link id="items" to="/contact" className='hover:text-[#007BFF] text-[18px] nav-animate'>Contact</Link>
      </div> 
    </div>
  </div>
  )
}