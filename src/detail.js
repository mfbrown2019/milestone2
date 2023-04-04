
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
            <article>
                <section>
                    <h2>Task Highlights</h2>
                    <p>Here you can see all of your upcoming tasks in your logbook and their details along with a brief explanation.</p>
                    <div class="detailparent">
                        <div class="detailcard">
                            <img class="images" src={urgent} alt="Task1"/>
                            <div class="container">
                                <h3><b>Milestone Project 1</b></h3> 
                                <p>Category: URGENT!</p> 
                                <p>Due Date: Friday, February 10, 2023 11:59PM</p>
                                <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                <p class="status">Staus: Pending</p>
                                <br/>
                                <p>Description: </p>
                                <textarea rows="10" cols="40">Develop a dynamic web application as a group in HTML5.</textarea><br/><br/>
                                <form action="list.html"><button>Add Task</button></form>
                            </div>
                        </div>
                        <div class="detailcard">
                            <img class="images" src={signup} alt="Task2"/>
                            <div class="container">
                                <h3><b>Lab 4</b></h3> 
                                <p>Category: Not Urgent</p> 
                                <p>Due Date: Friday, February 10, 2023 11:59PM</p>
                                <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                <p class="status">Staus: Done</p>
                                <br/>
                                <p>Description: </p>
                                <textarea rows="10" cols="40">Tailwind, CSS Preprocessor, Basic JavaScript and Website Evaluation Assignment.</textarea><br/><br/>
                                <form action="list.html"><button>Add Task</button></form>
                            </div>
                        </div>
                        <div class="detailcard">
                            <img class="images" src={important} alt="Task3"/>
                            <div class="container">
                                <h3><b>Lab 5</b></h3> 
                                <p>Category: Important</p> 
                                <p>Due Date: Friday, February 17, 2023 11:59PM</p>
                                <p>Location: George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901</p>
                                <p class="status">Staus: Incomplete</p>
                                <br/>
                                <p>Description: </p>
                                <textarea rows="10" cols="40">Implement a calculator using Vanilla JavaScript.</textarea><br/><br/>
                                <form action="list.html"><button>Add Task</button></form>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </article>

        <footer>© 2023 Milestone 1</footer>
        </body>

    </div>
  );
}

export default Detail;
