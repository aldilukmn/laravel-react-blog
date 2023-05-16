import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Register } from "../../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
