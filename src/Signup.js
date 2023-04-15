
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Hooks/useAuth';


const Signup = () => {
    const { googleSignIn, handleSignUp, handleName, handleemail, handlepassword, error, user } = useAuth();
    return (
        <div>
            <div>
                <h2 className="text-danger">Sign Up:Create an Account</h2>
                <form onSubmit={handleSignUp} >
                    <input onBlur={handleName} className='mx-auto w-25 mb-2' type="text" name="name" id="name" required placeholder='Enter Your Name' />
                    <br />
                    <input onBlur={handleemail} className='mx-auto w-25 mb-2' type="email" name="email" id="email" required placeholder='Enter Your Email' />
                    <br />
                    <input onBlur={handlepassword} className='mx-auto w-25 mb-2' type="password" name="password" id="password" required placeholder='Enter Your Password' />
                    <br />
                    {/* <input className='mx-auto w-25 mb-2' type="password" name="password" id="password" required placeholder='Re-enter Your Password' />
                    <br /> */}
                    <div className="text-danger mb-2">{error}</div>
                    <input className="btn btn-warning" type="submit" value="Sign Up" />
                    {user.email && <p className="text-success fs-6">Sign Up with Email and Password is Successful,Please Go to <Link to='/App'>Login</Link> page</p>}

                </form>

                <p>Already have an account? <Link to='/App'>Login</Link></p>
                <h6 className='text-warning'> Or you can sign in with Google</h6>
                <Button className="mb-3" onClick={googleSignIn} variant="warning">Google Sign in</Button>
            </div>
        </div>
    );
};

export default Signup;