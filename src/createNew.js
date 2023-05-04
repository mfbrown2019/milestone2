
import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import './detail.css';
import { signOut } from 'firebase/auth'
import {auth,provider} from "./FirebaseConfiguration";
import { useContext } from 'react';
import AuthContext from './Hooks/useAuth';
import AddNew from './AddingNew';

function CreateNew() {
  const { user } = useContext(AuthContext);
  console.log("CreateNew:", user)
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
  return (
    <div className="CreateNew">
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
                </ul>
            </nav>
        </header>
        <br/>
        <article className="contact">
            <h1>Create New Task</h1>
        <p>New tasks created here will be added to your todo list page and can be edited.</p><br/>
            {/* <form className="formalign" action="/list">
                <label htmlFor="tname">Task Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="tname" name="tname" maxLength='50'/><br/><br/>
                <label htmlFor="tcat">Task Category:</label>
                <input type="text" id="tcat" name="tcat" maxLength='50'/><br/><br/>
                <label htmlFor="tdue">Task Due Date:</label>
                <input type="text" id="tdue" name="tdue" maxLength='50'/><br/><br/>
                <label htmlFor="tstat">Task Status: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="tstat" name="tstat" maxLength='50'/><br/><br/>
                <label htmlFor="tloc">Task Location:</label>
                <input type="text" id="tloc" name="tloc" size='75'/><br/><br/>
                <label>Task Description:</label>
                <br/>
                <textarea rows="10" cols="50"></textarea>
                <br/><br/>
                <input type="submit" value="Add Task"/>
            </form> */}
            <AddNew />
        </article>

        <footer>© 2023 Milestone 3</footer>
        {/* </body> */}
    </div>
  );
}

export default CreateNew;
