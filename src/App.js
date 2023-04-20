import React from "react";
import Home from "./home";
import Detail from './detail';
import NewUser from './newUser';
import CreateNew from './createNew';
import List from './list';
import Profile from "./Check";
import reportWebVitals from './reportWebVitals';

import { Routes, Route } from "react-router-dom";
import {AuthProvider} from "./AuthProvider";
// import AuthProvider from "./AuthProvider";

function App() {
    return (
        <div>
            {/* <div className="navbar">
                <a href="/">Home</a>
                <a href="/detail">Details</a>
                <a href="/createNew">Create New</a>
                <a href="/newUser">New User</a>
            </div> */}
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/detail" element={<Detail />}></Route>
                    <Route path="/newUser" element={<NewUser />}></Route>
                    <Route path="/createNew" element={<CreateNew />}></Route>
                    <Route path="/list" element={<List />}></Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
