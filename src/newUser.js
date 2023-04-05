
import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import './detail.css';

function NewUser() {
  return (
    <div className="NewUser">
        <body>
            <header class="banner">
                <div>
                    <h1>Welcome to our To-Do List App</h1>
                    <img class="paw" src={panther_paw} alt="Paw"/>
                </div>
                <nav class="loginname">
                    <ul>
                        <li>Login Name Placeholder</li>
                    </ul>
                </nav>
                <nav class="usernav">
                    <ul class="userul">
                        <li> <a href="/newUser">SIGN UP</a></li>
                        <li> <a href="/newUser">LOGIN</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul class="gennav">
                        <li> <a href="/">HOME</a></li>
                        <li> <a href="/list">MY TO DO LIST</a></li>
                    </ul>
                </nav>
            </header>

            <article>
                <section>
                    <h1>Welcome to our site. Please come in and stay awhile.</h1>
                    <p> 
                        Log in if you already have an account. If you dont have an acount, please sign up with a Username, Password, and Email.
                    </p>
                    
                    <article class="login">
                        <h1>Login</h1>
                        <h1>Sign Up</h1>
                        <form action="/">
                            <label for="uname">Username:</label>
                            <input type="text" id="uname" size='50'/><br/><br/>
                            <label for="pass">Password:&nbsp;</label>
                            <input type="text" id="pass" name="pass" value="" size='50'/><br/><br/>
                            <input type="submit" value="Submit"/>
                        </form>
                        <form action="/">
                            <label for="uname">Username:</label>
                            <input type="text" id="newuname" size='50'/><br/><br/>
                            <label for="pass">Password:</label>
                            <input type="text" id="newpass" size='50'/><br/><br/>
                            <label for="newemail">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input type="email" id="newemail" size='50'/><br/><br/>
                            <label>Receive Email Notifcations On Upcoming Due Dates:</label>
                            <input type="checkbox" id="send" name="send" value="Updates"/>
                            <br/><br/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </article>
                </section>
            </article>

            <footer>Â© 2023 Milestone 1</footer>
        </body>

    </div>
  );
}

export default NewUser;
