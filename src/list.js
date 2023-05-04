import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import React, { Component } from 'react';
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
// import './detail.css';
import axios from 'axios';
import './list.css';
import tasks from './tasks.json'
import { signOut } from 'firebase/auth'
import {auth,provider} from "./FirebaseConfiguration";
import { useContext, useState } from 'react';
import AuthContext from './Hooks/useAuth';

function List() {
    const { user } = useContext(AuthContext);

    const [tasklist, setTasks] = useState([])
    console.log("List:", user)
    //   var Placeholder = 'Login';
    if (user) {
        var Placeholder = user.email;
        console.log(Placeholder);
    }
    //   const [setUser] = useState({});
    const handleLogout = async () => {
        signOut(auth).then(() => {
        //setUser({})
        })
    }
    

    let getUserData = () => {
        axios.get('http://localhost:8080/')
            .then((response) => {
            const data = response.data;
            let temp = []
            temp = data

            setTasks(temp)
            console.log('Data has been received!!');
            })
            .catch(() => {
            alert('Error retrieving data!!!');
            });
    }

    getUserData();



    const filterdata = (e) => {
        getUserData();
        const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setTasks(filteredTasks.length > 0 ? filteredTasks : tasks);
    }


  return (
    <div className="List">
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
                        <li> <a href="/createNew">CREATE NEW TASK</a></li>
                        {/* <!---<li> <a href="list">About</a></li>---> */}
                    </ul>
                </nav>
            </header>
            <article>
                <section>
                    <h1>TO DO List</h1>
                    <input className='filterBar' onChange={e => {
                        setTasks([]);
                        filterdata(e)
                        }
                    }></input>
                    <br/>
                    <h2>Item Categories</h2>
                    <div className='detailparent'>
                        <div className='detailcard'>
                            <img className="images" src={urgent} alt="Task1"/>
                            URGENT!
                        </div>
                        <div className='detailcard'>
                            <img className="images" src={important} alt="Task3"/>
                            Important
                        </div>
                        <div className='detailcard'>
                            <img className="images" src={not_urgent} alt="Task2"/>
                            Not Urgent
                        </div>
                        {
                            tasklist.map((task,index) => {
                                if (task['Category'] == "URGENT!") {
                                    return(
                                        <div className="detailcard urgent">
                                            <div className="container">
                                                <a href="/list">
                                                    <h1><b>{task.title}</b></h1> {/* check keys and make new component jsx page */}
                                                    <p>Category: {task.Category}</p> 
                                                    <p><b>Due Date: {task.Due}</b></p>
                                                    <p>Location: {task.Location}</p>
                                                    <p className="status">Staus: {task.status}</p>
                                                    <br/>
                                                    <p>Description: </p>
                                                    <p>{task.content}</p><br/><br/>
                                                </a>
                                                <nav>
                                                    <ul className="listnav">
                                                        <li> <a href="/detail">UPDATE</a></li>
                                                        <li> <a href="/detail">DELETE</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (task['Category'] == "Important") {
                                    return(
                                        <div className="detailcard important">
                                            <div className="container">
                                                <a href="/list">
                                                    <h1><b>{task.title}</b></h1> 
                                                    <p>Category: {task.Category}</p> 
                                                    <p><b>Due Date: {task.Due}</b></p>
                                                    <p>Location: {task.Location}</p>
                                                    <p className="status">Staus: {task.status}</p>
                                                    <br/>
                                                    <p>Description: </p>
                                                    <p>{task.content}</p><br/><br/>
                                                </a>
                                                <nav>
                                                    <ul className="listnav">
                                                        <li> <a href="/detail">UPDATE</a></li>
                                                        <li> <a href="/detail">DELETE</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return(
                                        <div className="detailcard noturgent">
                                            <div className="container">
                                                <a href="/list">
                                                    <h1><b>{task.title}</b></h1> 
                                                    <p>Category: {task.Category}</p> 
                                                    <p><b>Due Date: {task.Due}</b></p>
                                                    <p>Location: {task.Location}</p>
                                                    <p className="status">Staus: {task.status}</p>
                                                    <br/>
                                                    <p>Description: </p>
                                                    <p>{task.content}</p><br/><br/>
                                                </a>
                                                <nav>
                                                    <ul className="listnav">
                                                        <li> <a href="/detail">UPDATE</a></li>
                                                        <li> <a href="/detail">DELETE</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </section>
            </article>

       

            <footer>© 2023 Milestone 3</footer>
        {/* </body> */}

    </div>
  );
}

export default List;
