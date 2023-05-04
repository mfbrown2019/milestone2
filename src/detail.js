
import panther_paw from './Panther-Paw.png'
import axios from 'axios';
import './detail.css';
import { signOut } from 'firebase/auth'
import {auth} from "./FirebaseConfiguration";
import { useContext } from 'react';
import AuthContext from './Hooks/useAuth';
import { useState, useEffect } from 'react';

function Detail() {

    const [tasklist_real, setTasks_real] = useState([]);
    const [description, setDescription] = useState("");
    const { user } = useContext(AuthContext);

    //   var Placeholder = 'Login';
    if (user) {
        var Placeholder = user.email;
        console.log(Placeholder);
    }
    console.log("List:", user)

    useEffect(() => {
        getUserData();
      }, []);
    

    let getUserData = () => {
        axios.get('http://localhost:8080/')
            .then((response) => {
            const data = response.data;
            let temp = []
            temp = data

            setTasks_real(temp)
            console.log('Data has been received!!');
            })
            .catch(() => {
            alert('Error retrieving data!!!');
            });
    }



  //   const [setUser] = useState({});
  const handleLogout = async () => {
    signOut(auth).then(() => {
      //setUser({})
    })
  }
  return (
    <div className="Detail">
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
                                <li> <a href='/' onClick={handleLogout}>LOGOUT</a></li>
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
                    </ul>
                </nav>
            </header>
            <article>
                <section>
                    <h2>Task Highlights</h2>
                    <p>Here you can see all of your upcoming tasks in your logbook and their details along with a brief explanation.</p>
                    {
                            tasklist_real.map((task,index) => {
                                    return(
                                        <div className="detailcard urgent">
                                            <div className="">
                                                <form className="formalign" action="/list">
                                                    <h1><b>{task.title}</b></h1> {/* check keys and make new component jsx page */}
                                                    <p>Category: {task.Category}</p> 
                                                    <p><b>Due Date: {task.Due}</b></p>
                                                    <p>Location: {task.Location}</p>
                                                    <p className="status">Staus: {task.status}</p>
                                                    <br/>
                                                    <p>Description: </p>
                                                    <textarea rows="10" cols="50" name="content" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                                    <br></br>
                                                    <input type='submit' value={'Update'}></input>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
            
                </section>
        </article>

        <footer>© 2023 Milestone 3</footer>
        {/* </body> */}
    </div>
  );
}

export default Detail;
