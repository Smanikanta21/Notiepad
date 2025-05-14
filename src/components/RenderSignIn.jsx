import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import { sendPasswordResetEmail } from 'firebase/auth';

const handlePasswordReset = async (email) => {
    if (!email) {
        toast.error("Please enter your email address");
        return;
    }
    try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset email sent!");
    } catch (error) {
        toast.error("Error sending password reset email: " + error.message);
        console.error("Error sending password reset email:", error);
    }
}

const RenderSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            await signOut(auth); // Ensure previous session is cleared
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
            <input
                type="email"
                placeholder='Enter Email'
                className='border-b h-10 mt-4 w-72 transition focus:outline-none'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <div className="relative w-72 mt-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border-b h-10 w-full transition focus:outline-none pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            <br />
            <a href="#" onClick={(e) => { e.preventDefault(); handlePasswordReset(email); }}>Forgot Password?</a>
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