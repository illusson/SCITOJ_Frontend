import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./ts/component/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./ts/component/pages/Welcome";

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Welcome />} />
                <Route path={"/*"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);