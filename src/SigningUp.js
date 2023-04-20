import { getAuth, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useCallback } from "react";
import withRouter from "./WithRouter";
import app from "./FirebaseConfiguration";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NewUser from "./newUser";

const SignUp = ({ history }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSignUp = (async (e) => {
        e.preventDefault();
        const { name, email, password } = e.target.elements;
        console.log(e.target.elements)
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
            console.log(auth, name.value, email.value, password.value)
            const user = userCredential.user;
            console.log(userCredential)
            //alert("User Created")
            navigate('/')
            })
        } catch (error) {
            alert(error);
        }
    });

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })

    };

return (
    // <div>
    //     <Button type="submit">Sign Up</Button>
    // </div>
    <div>
        <form onSubmit={handleSignUp}>
        {/* <form onSubmit={handleSignUp & NewUser}> {handleSignUp & NewUser}> "return NewUser()" */}
            <label>Username:
                <input type="name" name="name" size='50'/><br/><br/>
            </label>
            <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" size='50'/><br/><br/>
            </label>
            <label>Password:
                <input type="password" name="password" size='50'/><br/><br/>
            </label>
            <label>Receive Email Notifcations On Upcoming Due Dates:
                <input type="checkbox" id="send" name="send" value="Updates"/><br/><br/>
            </label>
            <Button type="submit">Sign Up</Button>
        </form>
    </div>
  );
};

export default withRouter(SignUp);
