
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
            <header class="banner">
                <div>
                    <h1>Welcome to The To-Do List</h1>
                    <p>This page should be tried in safari, chrome or Mozila.</p>
                    <img class="paw" src={panther_paw} alt="Paw"/>
                </div>
                <nav class="loginname">
                    <ul>
                        <li>Login Name Placeholder</li>
                    </ul>
                </nav>
                <nav class="usernav">
                    <ul class="userul">
                        <li> <a href="list.html">SIGN UP</a></li>
                        <li> <a href="list.html">LOGIN</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul class="gennav">
                        <li> <a href="index.html">HOME</a></li>
                        <li> <a href="list.html">MY TO DO LIST</a></li>
                        <li> <a href="createNew.html">CREATE NEW TASK</a></li>
                    </ul>
                </nav>
            </header>
            <br/>
            <article class="contact">
                <h1>Create New Task</h1>
                <form class="formalign" action="list.html">
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
            <br/>

            <footer>© 2023 Milestone 1</footer>
        </body>

    </div>
  );
}

export default CreateNew;
