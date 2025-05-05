import React from "react";
import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Nav />
            <Outlet/>
        </>
    );
}