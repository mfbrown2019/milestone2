
import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import './detail.css';

function List() {
  return (
    <div className="List">
        
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
                        {/* <!---<li> <a href="list">About</a></li>---> */}
                    </ul>
                </nav>
            </header>
            <article>
                <section>
                    <h1>TO DO List</h1>
                    <br/>
                    <h2>Item Categories</h2>
                    <table>
                        <tr>
                            <th>
                                <img className="images" src={urgent} alt="Task1"/>
                                URGENT!
                            </th>
                            <th>
                                <img className="images" src={important} alt="Task3"/>
                                Important
                            </th>
                            <th>
                                <img className="images" src={not_urgent} alt="Task2"/>
                                <br/>
                                Not Urgent
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Milestone Project 1</b></h1> 
                                            <p>Category: URGENT!</p> 
                                            <p><b>Due Date: Friday, February 10, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Pending</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Develop a dynamic web application as a group in5.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Lab 5</b></h1> 
                                            <p>Category: Important</p> 
                                            <p><b>Due Date: Friday, February 17, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Incomplete</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Implement a calculator using Vanilla JavaScript.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Lab 4</b></h1> 
                                            <p>Category: Not Urgent</p> 
                                            <p>Due Date: Friday, February 10, 2023 11:59PM</p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Done</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Tailwind, CSS Preprocessor, Basic JavaScript and Website Evaluation Assignment.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Intro to JavaScript quiz</b></h1> 
                                            <p>Category: URGENT!</p> 
                                            <p><b>Due Date: Tuesday, February 14, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Incomplete</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Be prepared to take the quiz on the introduction to JavaScript.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Milestone Project 2</b></h1> 
                                            <p>Category: Important</p> 
                                            <p><b>Date: Thursday, March 9, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Incomplete</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Develop a dynamic web application as a group in5.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>JavaScript Objects, Functions, Events, Links, Images and Timers Quiz (TBD)</b></h1> 
                                            <p>Category: Not Urgent</p> 
                                            <p><b>Due Date: Tuesday, February 21, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Incomplete</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Be prepared to take the quiz on JavaScript Objects, Functions, Events, Links, Images and Timers.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Milestone Project 3</b></h1> 
                                            <p>Category: URGENT!</p> 
                                            <p><b>Due Date: Tuesday, April 4, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Pending</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Develop a dynamic web application as a group in5.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Quiz 3</b></h1> 
                                            <p>Category: Important</p> 
                                            <p><b>Due Date: Monday, February 20, 2023 11:00AM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Incomplete</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Be prepared to take quiz for Philosophy className</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="detailcard">
                                    <div className="container">
                                        <a href="/list">
                                            <h1><b>Scripting the DOM with JavaScript, testing, debugging, Modern JS and JQuery (TBD)</b></h1> 
                                            <p>Category: Not Urgent</p> 
                                            <p><b>Due Date: Tuesday, February 28, 2023 11:59PM</b></p>
                                            <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                            <p className="status">Staus: Done</p>
                                            <br/>
                                            <p>Description: </p>
                                            <p>Be prepared to take quiz on Scripting the DOM with JavaScript, testing, debugging, Modern JS and JQuery.</p><br/><br/>
                                        </a>
                                        <nav>
                                            <ul className="listnav">
                                                <li> <a href="/detail">UPDATE</a></li>
                                                <li> <a href="/detail">DELETE</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </section>
            </article>

       

            <footer>© 2023 Milestone 1</footer>
        </body>

    </div>
  );
}

export default List;
