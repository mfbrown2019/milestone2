import React, { useEffect, useState } from 'react';
import useFirebase from './Hooks/useFirebase';
import app from './FirebaseConfiguration';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
//     const allContext = useFirebase();
//     return (
//         <AuthContext.Provider value={allContext}>
//             {children}

//         </AuthContext.Provider>
//     );
// };
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

//export default AuthProvider;