
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const RenderSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            localStorage.setItem("email", user.email);
            toast.success("Logged in successfully");
            navigate("/home");
        } catch (error) {
            toast.error(error.message);
            console.error("Login error:", error);
        }
    };

    return (
        <div className='flex flex-col items-center animate-fade-in'>
            <input type="email" placeholder='Enter Email' className='border-b h-10 mt-4 w-72 transition focus:outline-none' onChange={(e)=> {setEmail(e.target.value)}}/>
            <input type="password" placeholder='Enter Password' className='border-b h-10 w-72 mt-4 transition focus:outline-none' onChange={(e) => {setPassword(e.target.value)}}/>
            <button
                type="button"
                onClick={handleLogin}
                className='w-56 h-10 border border-black rounded-lg font-bold text-lg mt-10 hover:bg-indigo-600 hover:text-white transition'>
                Login
            </button>
        </div>
    )
}
export default RenderSignIn;