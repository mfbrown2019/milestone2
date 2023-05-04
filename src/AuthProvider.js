// import React, { useEffect, useState } from 'react';
// import useFirebase from './Hooks/useFirebase';
// import app from './FirebaseConfiguration';
// // import AuthContext from './Hooks/useAuth';

// export const AuthContext = React.createContext();

// // function AuthProvider = ({ children }) => {
// const AuthProvider = ({ children }) => {
// //     const allContext = useFirebase();
// //     return (
// //         <AuthContext.Provider value={allContext}>
// //             {children}

// //         </AuthContext.Provider>
// //     );
// // };
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         app.auth().onAuthStateChanged(setCurrentUser);
//     }, []);

//     return (
//         <AuthContext.Provider value={{currentUser}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// import app from './FirebaseConfiguration';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import AuthContext from "./Hooks/useAuth";
// import useFirebase from './Hooks/useFirebase';
// import Profile from './Check';


const auth = getAuth()
const user = auth.currentUser
console.log(`context  user: ${user}`)
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const allContext = useFirebase();
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
            console.log(`context user: ${user}`)
            // console.log("username/email:", user.email); // to see user
        })
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        // <AuthContext.Provider value={{ allContext }}>{children}</AuthContext.Provider>
    );
};