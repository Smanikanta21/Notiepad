import React from "react";


export default function SignIn() {
    return (
        <div className="flex items-center flex-col">
            <div className="mt-24">
                <h1 className="text-2xl">Welcome to Notyypaddd</h1>
            </div>
            <form className="flex justify-center items-center flex-col gap-5 w-[20%] h-[55vh] bg-[#ffffff] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] mt-10">
                <input type="text" placeholder="Enter Name" className="w-[60%] p-[10px] rounded-xl border border-gray-400"/>
                <input type="email" placeholder="Enter Email" className="w-[60%] p-[10px] rounded-xl border border-gray-400" />
                <input type="password" placeholder="Enter Password" className="w-[60%] p-[10px] rounded-xl border border-gray-400"/>
                <input type="password" placeholder="Confirm Password" className="w-[60%] p-[10px] rounded-xl border border-gray-400" />
                <button className="w-[30%] p-[10px] rounded-xl border-none bg-[#007BFF] text-white text-lg">Sign In</button>
            </form>
        </div>
    );
}
