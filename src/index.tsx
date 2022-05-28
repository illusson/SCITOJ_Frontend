import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./ts/component/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./ts/component/pages/Welcome";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Welcome />} />
            <Route path={"/*"} element={<Home />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);