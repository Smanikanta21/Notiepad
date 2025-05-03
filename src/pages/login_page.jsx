import React from 'react';
import { useState } from 'react';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';




export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            alert("User logged in successfully");
        } catch (error) {   
            if (error.code === 'auth/user-not-found') {
                alert("User not found");
            }
            else if (error.code === 'auth/wrong-password') {
                alert("Wrong password");
            }
            else if (error.code === 'auth/invalid-email') {
                alert("Invalid email");
            }
            else if (error.code === 'auth/too-many-requests') {
                alert("Too many requests. Please try again later.");
            }
            else if (error.code === 'auth/operation-not-allowed') {
                alert("Operation not allowed");
            }
            else {
                alert("An unexpected error occurred. Please try again.");
            }
        }
    }
    

    return(
        <div className='flex flex-col gap-14 items-center'>
        <div className='mt-64'>
            <h1 className='text-3xl'>Welcome to Notyypaddd</h1>
        </div>
            <form className='flex justify-center items-center flex-col gap-3 w-[20%] h-[40vh] bg-[#ffffff] rounded-[12px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]'>
                <button className="w-[60%] p-[10px] rounded-xl border border-gray-400 text-black bg-white mt-2">Sign in with Google</button>
                <input type="email" placeholder='Enter Email' className='w-[60%] p-3 rounded-lg border-[1px] border-gray-300' onChange={(e)=> {setEmail(e.target.value)}}/>
                <input type="password" placeholder='Enter Password'className='w-[60%] p-3 rounded-lg border-[1px] border-gray-300'onChange={(e)=> {setPassword(e.target.value)}} />
                <p>Forgot Password</p>
                <button className='w-[30%] p-2 rounded-xl border-none bg-[#007BFF] text-white text-lg' onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}