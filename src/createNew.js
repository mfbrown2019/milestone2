
import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import './detail.css';

function CreateNew() {
  return (
    <div className="CreateNew">
        
        <body>
            <header className="banner">
            <div className="top">
                <h1>Welcome to our To-Do List App</h1>
            </div>
            <img className="paw" src={panther_paw} alt="Paw"/>
            <nav className="loginname">
                <ul>
                    <li>Login Name Placeholder</li>
                </ul>
            </nav>
            <nav className="usernav">
                <ul className="userul">
                    <li> <a href="/newUser">SIGN UP</a></li>
                    <li> <a href="/newUser">LOGIN</a></li>
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
            <form className="formalign" action="list.html">
                <label for="tname">Task Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="tname" name="tname" maxlength='50'/><br/><br/>
                <label for="tcat">Task Category:</label>
                <input type="text" id="tcat" name="tcat" maxlength='50'/><br/><br/>
                <label for="tdue">Task Due Date:</label>
                <input type="text" id="tdue" name="tdue" maxlength='50'/><br/><br/>
                <label for="tstat">Task Status: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="tstat" name="tstat" maxlength='50'/><br/><br/>
                <label for="tloc">Task Location:</label>
                <input type="text" id="tloc" name="tloc" size='75'/><br/><br/>
                <label>Task Description:</label>
                <br/>
                <textarea rows="10" cols="50"></textarea>
                <br/><br/>
                <input type="submit" value="Add Task"/>
            </form>
        </article>

        <footer>© 2023 Milestone 1</footer>
        </body>

    </div>
  );
}

export default CreateNew;
