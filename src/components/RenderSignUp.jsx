import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
const RenderSignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
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
        <div className='flex flex-col items-center animate-fade-in'>
            <input className='border-b h-10 mt-4 w-72 transition focus:outline-none' type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
            <input className='border-b h-10 mt-4 w-72 transition focus:outline-none' type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='border-b h-10 mt-4 w-72 transition focus:outline-none' type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='w-36 h-10 border border-black rounded-lg font-bold text-lg mt-10 hover:bg-indigo-600 hover:text-white' onClick={handleSignUp}>SignUp</button>
        </div>
    )
}
export default RenderSignUp;