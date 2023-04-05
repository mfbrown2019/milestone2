
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
            <header className="banner">
                <h1>Welcome to Our Christmas Store</h1>
                <p>This page should be tried in safari, chrome or Mozila.</p>
                <img className="paw" src={panther_paw} alt="Paw" width="300px" height="400px"/>
            </header>
            <nav>
                <ul className="gennav">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/list">My To Do List</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li> <a href="/detail"><button type="button">Update</button></a></li>
                    {/* <!---<button type="button" onclick="detail">Update</button>---> */}
                    <li> <a href="/detail"><button type="button">Delete</button></a></li>
                </ul>
            </nav>
            <article>
                <section>
                    <h1>Welcome to my site. Please come in and stay awhile.</h1>
                    <p> 
                        i.	I started this web site because Christmas has always been my favorite holiday. Last year, I started selling some of my favorite Christmas products and they've become quite a hit.
                    </p>

                    <p>
                        ii.	If you click on the personal link, you can browse my favorite Christmas pictures, stories and films. If you join my email list, I will keep you you up-to-date on all things Christmas.
                    </p>
                    <h2>Product Categories</h2>
                    <ul>
                        <li>i.	Decorations</li>
                        <li>ii.	Recipes</li>
                        <li>iii.	Toys</li>
                        <li>iv.	Unique Gift Ideas</li>
                        <li>v.	Wrapping Paper</li>
                    </ul>

                    <dl>
                        <dt>Coffee</dt>
                        <dd>Black Hot Drink</dd>
                        <dt>Milk</dt>
                        <dd>White Cold Drink</dd>
                    </dl>

                    <h3>My guarantee</h3>

                    <p>If you aren't completely satisfied with everything you buy from my site, 
                        you can return it for a full refund.<br/>
                        <em>No questions asked!</em>
                    </p>
                </section>
            </article>

            

            <footer>© 2023 Jovany Caraballo</footer>
        </body>

    </div>
  );
}

export default NewUser;
