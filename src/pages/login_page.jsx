import React from 'react';


export default function Login() {
    return(
        <div className='flex flex-col gap-14 items-center'>
        <div className='mt-64'>
            <h1 className='text-3xl'>Welcome to Notyypaddd</h1>
        </div>
            <form className='flex justify-center items-center flex-col gap-3 w-[20%] h-[40vh] bg-[#ffffff] rounded-[12px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]'>
                <input type="email" placeholder='Enter Email' className='w-[60%] p-3 rounded-lg border-[1px] border-gray-300'/>
                <input type="password" placeholder='Enter Password'className='w-[60%] p-3 rounded-lg border-[1px] border-gray-300'/>
                <button className='w-[30%] p-2 rounded-xl border-none bg-[#007BFF] text-white text-lg'  >Login</button>
            </form>
        </div>
    );
}