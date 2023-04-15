import { getAuth, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import React, { useCallback } from "react";
import withRouter from "./WithRouter";
import app from "./FirebaseConfiguration";
import { Button } from 'react-bootstrap';


const SignUp = ({ history }) => {
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const auth = getAuth();
    const handleSignUp = useCallback(async e => {
        e.preventDefault();
        const { name, email, password } = e.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value); { /*}.then(result => { */}
                //     const user = result.user;
                //     console.log(user);
                //     setError('');
                //     // verifyemail();
                //     setUserName();
                // })
                // .catch(error => {
                //     setError(error.message);

                // })
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })

    }

return (
    <div>
        <form onSubmit={handleSignUp}>
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
