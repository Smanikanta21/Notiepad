import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
const RenderSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='flex flex-col items-center'>
            <input type="email" placeholder='Enter Email' className='border-b h-10 mt-4 w-72 ' onChange={(e)=> {setEmail(e.target.value)}}/>
            <input type="password" placeholder='Enter Password'className='border-b h-10 w-72 mt-4 'onChange={(e) => {setPassword(e.target.value)}}/>
            <button type="button" className='w-56 h-10 border border-black rounded-lg font-bold text-lg mt-10'>Login</button>
        </div>
    )
}
export default RenderSignIn;