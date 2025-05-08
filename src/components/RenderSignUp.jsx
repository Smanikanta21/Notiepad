import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const RenderSignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        localStorage.setItem("name", name);
        navigate("/home")
    }

    return (
        <div className='flex flex-col items-center animate-fade-in'>
            <input className='border-b h-10 mt-4 w-72 transition focus:outline-none' type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
            <input className='border-b h-10 mt-4 w-72 transition focus:outline-none' type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='border-b h-10 mt-4 w-72 transition focus:outline-none' type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='w-36 h-10 border border-black rounded-lg font-bold text-lg mt-10 hover:bg-indigo-600 hover:text-white' onClick={handleSignUp}>SignUp</button>
        </div>
    )
}
export default RenderSignUp;