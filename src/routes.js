import React from "react";
import App from "./App";
import App from './App';
import Detail from './detail';
import List from './list';
import CreateNew from './createNew';
import reportWebVitals from './reportWebVitals';


function Router() {
    return (
        <div>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/detail">Details</a>
                <a href="/createNew">Create New</a>
                <a href="/list">List</a>
            </div>
            <Routes>
                <Route exact path="/" element={<App />}></Route>
                <Route exact path="/detail" element={<Detail />}></Route>
                <Route exact path="/list" element={<List />}></Route>
                <Route exact path="/createNew" element={<CreateNew />}></Route>
                
            </Routes>
        </div>
    );
}

export default Router;
