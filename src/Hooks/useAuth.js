import { useContext } from "react"
// import { AuthContext } from "../AuthProvider"

// const useAuth = () => {
//     return useContext(AuthContext);
// }
// export default useAuth;
import app from "../FirebaseConfiguration";
import { createContext } from "react";
const AuthContext = createContext();
export default AuthContext;