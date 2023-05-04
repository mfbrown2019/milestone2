import './detail.css'
import './home.css';


import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import todo from './todolist.jpg'
import './detail.css';
import { AuthProvider } from './AuthProvider';
// import AuthProvider from './AuthProvider';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './Hooks/useAuth';
import React, {useEffect, useState} from "react";
import {auth,provider} from "./FirebaseConfiguration";
import axios from 'axios';


function Home() {
  const { user } = useContext(AuthContext);
  console.log("Home:", user)
  // var Placeholder = 'Login';
  if (user) {
    var Placeholder = user.email;
    console.log(Placeholder);
  }
  // const [setUser] = useState({});
  const handleLogout = async () => {
    signOut(auth).then(() => {
      //setUser({})
    })
  }

  return (
    <AuthProvider>
      <div className="Home">
      {/* <body> */}
        <header className="banner">
            <div className="top">
                <h1>Welcome to our To-Do List App</h1>
            
            </div>
            <img className="paw" src={panther_paw} alt="Paw"/>
            <nav className="loginname">
                <ul>
                    {user? (
                        <>
                            <input readOnly type="text" id="myText" name="search" placeholder={Placeholder} />
                        </>
                    ) : (
                        <></>
                    )}
                </ul>
            </nav>
            <nav className="usernav">
                <ul className="userul">
                    {user? (
                        <div>
                            {/* <li><button onClick={handleLogout}>LOGOUT</button></li> */}
                            <li> <a onClick={handleLogout}>LOGOUT</a></li>
                        </div>
                    ) : (
                        <>
                            <li> <a href="/newUser">SIGN UP</a></li>
                            <li> <a href="/newUser">LOGIN</a></li>
                        </>
                    )}
                </ul>
            </nav>
            <nav>
                <ul className="gennav">
                    <li> <a href="/">HOME</a></li>
                    <li> <a href="/list">MY TO DO LIST</a></li>
                    {/* <!---<li> <a href="list.html">About</a></li>---> */}
                </ul>
            </nav>
        </header>

        <article>
            <section>
                <div className="intro">
                    <h1>Features</h1>
                    <p>We started this website in order to help people stay organized and keep track of their tasks</p>
                    <p>Our goal is not only to improve your organizational skills, but also to increase tour productivity and planning, through a simple and free-to-use logbook</p>
                </div>

                <div className="mainCards">
                    <div>
                        <h2>MAIN</h2>
                        <p>MAIN OVERVIEW PAGE</p>
                        <a href="/">
                        <img className="homeimg" src={home} alt="homepage"/>
                        </a>
                    </div>
                    <div>
                        <h2>TODO LIST</h2>
                        <p>MAIN TODO LIST</p>
                        <a href="/list">
                            <img className="homeimg" src={todo} alt="todolist"/>
                        </a>
                    </div>
                    <div>
                        <h2>SIGN UP</h2>
                        <p>MAKE AN ACCOUNT</p>
                        <a href="/newUser">
                            <img className="homeimg" src={signup} alt="signup"/>
                        </a>
                    </div>
                    <div>
                        <h2>LOGIN</h2>
                        <p>LOGIN TO THE ACCOUNT</p>
                        <a href="/newUser">
                            <img className="homeimg" src={login} alt="loginimg"/>
                        </a>
                    </div>
                </div>
            </section>
        </article>

        <footer>© 2023 Milestone 3</footer>
      {/* </body> */}
      </div>
    </AuthProvider>
  );
}

export default Home;
