import React from "react";
import App from "./App";
import Detail from './detail';
import NewUser from './newUser';
import CreateNew from './createNew';
import List from './list';
import reportWebVitals from './reportWebVitals';

import { Routes, Route } from "react-router-dom";


function Router() {
    return (
        <div>
            {/* <div className="navbar">
                <a href="/">Home</a>
                <a href="/detail">Details</a>
                <a href="/createNew">Create New</a>
                <a href="/newUser">New User</a>
            </div> */}
            <Routes>
                <Route exact path="/" element={<App />}></Route>
                <Route exact path="/detail" element={<Detail />}></Route>
                <Route exact path="/newUser" element={<NewUser />}></Route>
                <Route exact path="/createNew" element={<CreateNew />}></Route>
                <Route exact path="/list" element={<List />}></Route>
                
            </Routes>
        </div>
    );
}

export default Router;
