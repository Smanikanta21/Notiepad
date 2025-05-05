import React from "react";
import RenderSignup from "./RenderSignup.jsx"
import { useContext } from "react";
import Nav from "./Nav.jsx";

function Home() {
    const name = localStorage.getItem("name");
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page {name} </h1>
                <p className="text-lg">This is a simple home page.</p>
            </div>
        </>
    );
}
export default Home;