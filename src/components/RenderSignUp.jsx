import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from "lucide-react";

const RenderSignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
        try {
            console.log("Trying to create:", email, password);
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;
            console.log(user);
            toast.success("User Created Successfully");
            localStorage.setItem("name", name);
            localStorage.setItem("email", user.email);
            navigate("/home");

        } catch (error) {
            console.log("Error creating user:", error);
            toast.error(error.code === "auth/email-already-in-use" ? "Email already registered" : error.message);
        }
    };

    return (
        <form className='flex flex-col items-center animate-fade-in'>
            <input
              className='border-b h-10 mt-4 w-72 transition focus:outline-none'
              type="text"
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='border-b h-10 mt-4 w-72 transition focus:outline-none'
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button type='button' className='w-36 h-10 border border-black rounded-lg font-bold text-lg mt-10 hover:bg-indigo-600 hover:text-white' onClick={handleSignUp}>SignUp</button>
        </form>
    )
}
export default RenderSignUp;