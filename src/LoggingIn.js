import React, {useEffect, useState, useCallback, useContext} from "react";
import {auth,provider} from "./FirebaseConfiguration"
import {signInWithPopup, updateProfile, signOut} from "firebase/auth"; 
import NewUser from "./newUser"
import { Button } from 'react-bootstrap';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "./Hooks/useAuth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import withRouter from "./WithRouter";
// import { AuthContext } from "./AuthProvider";
import AuthContext from "./Hooks/useAuth";
import { getAuth } from "firebase/auth";
import app from "./FirebaseConfiguration";
import AuthProvider from "./AuthProvider";

// // const LogIn = ({ history }) => {
// const LogIn = () => {
//     const [error, setError] = useState('')
//     const [name, setName] = useState('')
//     const auth = getAuth();
//     const navigate = useNavigate();
//     const handleLogIn = useCallback(async e => {
//         e.preventDefault();
//         const { email, password } = e.target.elements;
//         try {
//             await app
//                 .auth()
//                 //signInWithEmailAndPassword
//                 .signInWithEmailAndPassword(email.value, password.value); { /*}.then(result => { */}
//             // history.push("/")
//             myFunction();
//             // navigate('/')
//         } catch (error) {
//             alert(error);
//         }
//     // }, [history]);
//     });

// const LogIn = ({ history }) => {
const LogIn = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();
    const handleLogIn = (async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        //console.log(e.target.elements)
        try {
            await signInWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
            console.log(auth, email.value, password.value)
            const user = userCredential.user;
            console.log("logged in as:", user.email)
            navigate('/')
            })
        } catch (error) {
            alert(error);
        }
    // }, [history]);
    });

    // const currentUser = useContext(AuthContext);

    // if (currentUser) {
    //     return <Link to="/" />;
    // }

return (
    <div>
        {/* <Button type="submit">Sign In</Button> */}
        <form onSubmit={handleLogIn}>
            <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" size='50'/><br/><br/>
            </label>
            <label>Password:&nbsp;
                <input type="password" name="password" size='50'/><br/><br/>
            </label>
            <Button type="submit">Sign In</Button>
        </form>
    </div>
);
};
export default withRouter(LogIn);