import React from 'react';
import axios from 'axios';
import withRouter from "./WithRouter";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Placeholder } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from './Hooks/useAuth';

function GetUser() {
  const { user } = useContext(AuthContext);
  if (user) {
    var Placeholder = user.email;
    console.log(Placeholder, "Placeholder");
 }
  return (Placeholder);
  //return Placeholder;
  //return user.email;
}


class AddNew extends React.Component {

  state = {
    id: '',
    title: '',
    Category: '',
    Due: '',
    Location: '',
    status: '',
    content: '',
    posts: []
  };

  componentDidMount = () => {
    this.getUserData();
  };


  getUserData = () => {
    axios.get('http://localhost:8080/')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => { //////////
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    //const { user } = useContext(AuthContext);
    //var username = <GetUser/>;
    const payload = {
        //id: user.email,
        //id: <GetUser/>,
        id: 1,
        title: this.state.title,
        Category: this.state.Category,
        Due: this.state.Due,
        Location: this.state.Location,
        status: this.state.status,
        content: this.state.content,
        //posts: []
    };


    axios({
      url: 'http://localhost:8080/register',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getUserData();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      //id: '',
      title: '',
      Category: '',
      Due: '',
      Location: '',
      status: '',
      content: '',
      //posts: []
    });
  };

  displayUserData = (posts) => {

    if (!posts.length) return null;
    console.log(posts);


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h1><b>{post.title}</b></h1> 
        <p>Category: {post.Category}</p> 
        <p><b>Due Date: {post.Due}</b></p>
        <p>Location: {post.Location}</p>
        <p className="status">Staus: {post.status}</p>
        <br/>
        <p>Description: </p>
        <p>{post.content}</p><br/><br/>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div>
      <form className="formalign" action="/list" onSubmit={this.submit}>
          <label htmlFor="tname">Task Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="tname" name="title" maxLength='50' value={this.state.title} onChange={this.handleChange}/><br/><br/>
          <label htmlFor="tcat">Task Category:</label>
          <input type="text" id="tcat" name="Category" maxLength='50' value={this.state.Category} onChange={this.handleChange}/><br/><br/>
          <label htmlFor="tdue">Task Due Date:</label>
          <input type="text" id="tdue" name="Due" maxLength='50' value={this.state.Due} onChange={this.handleChange}/><br/><br/>
          <label htmlFor="tstat">Task Status: &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="tstat" name="status" maxLength='50' value={this.state.status} onChange={this.handleChange}/><br/><br/>
          <label htmlFor="tloc">Task Location:</label>
          <input type="text" id="tloc" name="Location" size='75'value={this.state.Location} onChange={this.handleChange}/><br/><br/>
          <label>Task Description:</label>
          <br/>
          <textarea rows="10" cols="50" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
          <br/><br/>
          {/* <input type="submit" value="Add Task"/> */}
          <Button type="submit">Add Task</Button>
      </form>
        <div className="blog-">
            {this.displayUserData(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default withRouter(AddNew);

  // const payload = {
    //     id: 1,
    //     title: "Milestone Project 1",
    //     Category: "URGENT!",
    //     Due: "Friday, February 10, 2023 11:59PM",
    //     Location: "George M. Skurla Hall College Of Aeronautics - 180 W University Blvd, Melbourne, FL 32901",
    //     status: "Pending",
    //     content: "Develop a dynamic web application as a group"
    //   };

    // <div className="app">
    //     <h2>Welcome to the best app ever</h2>
    //     <form onSubmit={this.submit}>
    //       <div className="form-input">
    //         <input 
    //           type="text"
    //           name="title"
    //           placeholder="Title"
    //           value={this.state.title}
    //           onChange={this.handleChange}
    //         />
    //       </div>
    //       <div className="form-input">
    //         <textarea
    //           placeholder="body"
    //           name="body"
    //           cols="30"
    //           rows="10"
    //           value={this.state.body}
    //           onChange={this.handleChange}
    //         >
              
    //         </textarea>
    //       </div>

    //       <button>Submit</button>
    //     </form>