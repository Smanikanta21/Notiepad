
import React, { useState } from 'react';
import RenderSignUp from './RenderSignUp';
import RenderSignIn from './RenderSignIn';

export default function LoginPage() {
    const [isSwitch, setIsSwitch] = useState(false);
    return (
        <div className='flex flex-col gap-14 items-center'>
            <div className='mt-72 text-3xl font-bold font-serif'>
                <h1>Welcome to NotiePad</h1>
            </div>
            <div className='pl-8 pr-8 h-[40vh] bg-[#ffffff] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center'>
                <div className='mb-6 flex flex-row gap-2'>
                    <button type='button' className={`border text-xl px-4 py-1 rounded ${!isSwitch ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} onClick={() => setIsSwitch(false)}>SignUp</button>
                    <button type='button' className={`border text-xl px-4 py-1 rounded ${isSwitch ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} onClick={() => setIsSwitch(true)}>Login</button>
                </div>
                <button type="button" className='w-56 h-10 border border-black rounded-lg font-bold text-lg flex flex-row gap-4 items-center mb-6'>
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="w-5 h-5 ml-2" />
                    Sign In with Google
                </button>
                <form className='flex flex-col items-center'>
                    {isSwitch ? <RenderSignIn /> : <RenderSignUp />}
                </form>
            </div>
        </div>
    );
}