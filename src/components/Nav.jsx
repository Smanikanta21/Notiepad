import React  from "react";

<div className='flex justify-center mt-[1rem]'>
<div className='flex justify-between items-center p-[10px] bg-white w-[90%] border-[1px] border-gray-300 rounded-[12px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] relative'>
  <div className='logo'>
    <Link to="/">Notyypaddd</Link>
  </div>
  <div className='flex gap-[20px]'>
    <Link to="/" className='hover:text-[#007BFF] text-[18px] transit'>Home</Link>
    <Link to="/about" className='hover:text-[#007BFF] text-[18px]' >About</Link>
    <Link to="/contact" className='hover:text-[#007BFF] text-[18px]'>Contact</Link>
    <Link to="/login" className='hover:text-[#007BFF] text-[18px]'>Login</Link>
    <Link to="/signup"className='hover:text-[#007BFF] text-[18px]'>Sign Up</Link>
  </div> 
</div>
</div>