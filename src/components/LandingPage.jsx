import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
        <div  className="flex flex-col items-center gap-14">
            <h1 className='text-8xl mt-72 font-bold'>Welcome to NotiePad</h1>
            <p className='text-xl px-60'>NotiePad is a simple note-taking application that allows you to create, edit, and delete notes.It is designed to be user-friendly and easy to navigate, making it perfect for anyone who needs a simple way to keep track of their thoughts and ideas.</p>
            <button id='gt' type='button' className=" mt-4 w-[10rem] h-10 border border-black rounded-lg font-bold text-lg" onClick={(e) => {
                e.preventDefault();
                navigate('/gt');
            }}>Get Started</button>
        </div>
    );
}