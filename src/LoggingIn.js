import React, {useEffect, useState, useCallback, useContext} from "react";
import {auth,provider} from "./FirebaseConfiguration"
import {signInWithPopup, updateProfile, signOut} from "firebase/auth"; 
import NewUser from "./newUser"
import { Button } from 'react-bootstrap';
import App from "./App";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "./Hooks/useAuth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import withRouter from "./WithRouter";
import { AuthContext } from "./AuthProvider";
import { getAuth } from "firebase/auth";
import app from "./FirebaseConfiguration";

const LogIn = ({ history }) => {
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const auth = getAuth();
    const handleLogIn = useCallback(async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value); { /*}.then(result => { */}
                //     const user = result.user;
                //     console.log(user);
                //     setError('');
                //     // verifyemail();
                //     setUserName();
                // })
                // .catch(error => {
                //     setError(error.message);
    
                // })
            history.push("/")
        } catch (error) {
            alert(error);
        }
    }, [history]);

// const currentUser = useContext(AuthContext);

// if (currentUser) {
//     return <Link to="/" />;
// }

return (
    <div>
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