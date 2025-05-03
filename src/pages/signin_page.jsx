import React from "react";
import {useState} from "react";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SignIn() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const handleSignIn = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, e.target[1].value, e.target[2].value);
            console.log("User signed in successfully");
            alert("User signed in successfully");
        }
        catch (error) {
            console.error("Error signing in: ", error);
            alert("Error signing in: ", error);
        }
    }


    return (
        <div className="flex items-center flex-col">
            <div className="mt-24">
                <h1 className="text-2xl">Welcome to Notyypaddd</h1>
            </div>
            <form className="flex justify-center items-center flex-col gap-5 w-[20%] h-[55vh] bg-[#ffffff] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] mt-10" >
                <input type="text" placeholder="Enter Name" className="w-[60%] p-[10px] rounded-xl border border-gray-400"/>
                <input type="email" placeholder="Enter Email" className="w-[60%] p-[10px] rounded-xl border border-gray-400" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Enter Password" className="w-[60%] p-[10px] rounded-xl border border-gray-400" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" className="w-[60%] p-[10px] rounded-xl border border-gray-400" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button className="w-[30%] p-[10px] rounded-xl border-none bg-[#007BFF] text-white text-lg" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    );
}
