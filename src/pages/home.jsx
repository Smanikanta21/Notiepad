import React from 'react';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
           <h1 className='text-8xl mt-64 font-bold'>Welcome to NotiePad</h1>
              <p className='text-xl'>NotiePad is a simple note-taking application that allows you to create, edit, and delete notes.</p>
                <p className='text-xl'>It is designed to be user-friendly and easy to navigate, making it perfect for anyone who needs a simple way to keep track of their thoughts and ideas.</p>
        </div>
    );
}