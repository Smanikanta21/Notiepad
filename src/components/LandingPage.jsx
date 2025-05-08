import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 px-6 text-center">
        <h1 className="text-6xl font-bold text-indigo-700 mb-6 drop-shadow-lg">
          Welcome to NotiePad
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          NotiePad is a simple, user-friendly note-taking app that lets you quickly create, edit, and manage your thoughts with ease. Whether you're brainstorming or journaling, NotiePad keeps everything organized and accessible.
        </p>
        <button
          id="gt"
          type="button"
          className="w-40 h-12 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            navigate('/gt');
          }}
        >
          Get Started
        </button>
      </div>
    );
}