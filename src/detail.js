
import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import './detail.css';

function Detail() {
  return (
    <div className="Detail">
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
            <article>
                <section>
                    <h2>Task Highlights</h2>
                    <p>Here you can see all of your upcoming tasks in your logbook and their details along with a brief explanation.</p>
                    <div className="detailparent">
                        <div className="detailcard">
                            <img className="images" src={urgent} alt="Task1"/>
                            <div className="container">
                                <h3><b>Milestone Project 1</b></h3> 
                                <p>Category: URGENT!</p> 
                                <p>Due Date: Friday, February 10, 2023 11:59PM</p>
                                <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                <p className="status">Staus: Pending</p>
                                <br/>
                                <p>Description: </p>
                                <textarea rows="10" cols="40">Develop a dynamic web application as a group in HTML5.</textarea><br/><br/>
                                {/* <form action="list.html"><button>Add Task</button></form> */}
                                <form action="/createNew"><button>Add Task</button></form>
                            </div>
                        </div>
                        <div className="detailcard">
                            <img className="images" src={not_urgent} alt="Task2"/>
                            <div className="container">
                                <h3><b>Lab 4</b></h3> 
                                <p>Category: Not Urgent</p> 
                                <p>Due Date: Friday, February 10, 2023 11:59PM</p>
                                <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                <p className="status">Staus: Done</p>
                                <br/>
                                <p>Description: </p>
                                <textarea rows="10" cols="40">Tailwind, CSS Preprocessor, Basic JavaScript and Website Evaluation Assignment.</textarea><br/><br/>
                                {/* <form action="list.html"><button>Add Task</button></form> */}
                                <form action="/createNew"><button>Add Task</button></form>
                            </div>
                        </div>
                        <div className="detailcard">
                            <img className="images" src={important} alt="Task3"/>
                            <div className="container">
                                <h3><b>Lab 5</b></h3> 
                                <p>Category: Important</p> 
                                <p>Due Date: Friday, February 17, 2023 11:59PM</p>
                                <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                <p className="status">Staus: Incomplete</p>
                                <br/>
                                <p>Description: </p>
                                <textarea rows="10" cols="40">Implement a calculator using Vanilla JavaScript.</textarea><br/><br/>
                                {/* <form action="list.html"><button>Add Task</button></form> */}
                                <form action="/createNew"><button>Add Task</button></form>
                            </div>
                        </div>
                    </div>
            
                </section>
        </article>

        <footer>© 2023 Milestone 2</footer>
        </body>

    </div>
  );
}

export default Detail;
