import React, { useState } from 'react';
import RenderSignUp from './RenderSignUp';
import RenderSignIn from './RenderSignIn';
import Google from '../assets/google.jpg';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const navigate = useNavigate();
    const [isSwitch, setIsSwitch] = useState(false);
    const GoogleSignIn = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const name = user.displayName;
            const usrimg = user.photoURL;
            console.log(usrimg)
            localStorage.setItem("name",name);
            localStorage.setItem("usrimg", usrimg);
            console.log(user);
            toast.success("Sign in successful");
            navigate("/home");
        }catch(error){
            console.log("Error signing in with Google:", error);
            toast.error("Error signing in with Google");
        }

    }
    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center'>
            <div className="animate-fade-in w-full flex flex-col items-center gap-14">
                <div className='md:mt-80 mt-48 text-3xl font-bold font-serif'>
                    <h1>Welcome to NotiePad</h1>
                </div>
                <div className='pl-8 pr-8 bg-[#ffffff] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center py-16'>
                    <div className='mb-6 flex flex-row gap-2'>
                        <button type='button' className={`border text-xl px-4 py-1 rounded ${!isSwitch ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} onClick={() => setIsSwitch(false)}>SignUp</button>
                        <button type='button' className={`border text-xl px-4 py-1 rounded ${isSwitch ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} onClick={() => setIsSwitch(true)}>Login</button>
                    </div>
                      <button type="button"className="relative  w-56 h-10 border border-black rounded-lg font-bold text-lg flex flex-row gap-4 items-center mb-6 bg-white hover:bg-indigo-600 hover:text-white transition" onClick={GoogleSignIn}>
                        <img src={Google} alt="Google logo" className="w-5 h-5 ml-2" />
                        Sign In with Google
                      </button>
                    <form className='flex flex-col items-center'>
                        {isSwitch ? <RenderSignIn /> : <RenderSignUp />}
                    </form>
                </div>
            </div>
        </div>
    );
}