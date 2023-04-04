import './detail.css'
import './App.css';


import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
import todo from './todolist.jpg'
import './detail.css';

function App() {
  return (
    <div className="App">
      <body>
          <header class="banner">
              <div class="top">
                  <h1>Welcome to our ToDo List App</h1>
                
              </div>
              <img class="paw" src={panther_paw} alt="Paw" width="300px" height="400px"/>
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
                      {/* <!---<li> <a href="list.html">About</a></li>---> */}
                  </ul>
              </nav>
          </header>

          <article>
              <section>
                  <div class="intro">
                      <h1>Features</h1>
                      <p>We started this website in order to help people stay organized and keep track of their tasks</p>
                      <p>Our goal is not only to improve your organizational skills, but also to increase tour productivity and planning, through a simple and free-to-use logbook</p>
                  </div>

                  <div class="mainCards">
                      <div>
                          <h2>MAIN</h2>
                          <p>MAIN OVERVIEW PAGE</p>
                          <img src={home} width="100%" height="400px"/>
                      </div>
                      <div>
                          <h2>TODO LIST</h2>
                          <p>MAIN TODO LIST</p>
                          <img src={todo} width="100%" height="400px"/>
                      </div>
                      <div>
                          <h2>SIGN UP</h2>
                          <p>MAKE AN ACCOUNT</p>
                          <img src={signup} width="100%" height="400px"/>
                      </div>
                      <div>
                          <h2>LOGIN</h2>
                          <p>LOGIN TO THE ACCOUNT</p>
                          <img src={login} width="100%" height="400px"/>
                      </div>
                  </div>
              </section>
          </article>

        <footer>© 2023 Milestone 1</footer>
      </body>
    </div>
  );
}

export default App;
