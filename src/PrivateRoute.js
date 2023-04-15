import React, {useContext} from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './Hooks/useAuth';
import { AuthContext } from './AuthProvider';

// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, isLoading } = useAuth();
//     if (isLoading) {
//         return <Spinner animation="border" variant="warning" />
//     }
//     return (

//         <Route
//             {...rest}
//             render={({ location }) => user.email ? children : <Redirect
//                 to={{
//                     pathname: "/App",
//                     state: { from: location }
//                 }}></Redirect>
//             }
//         ></Route>
//     );
// };
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return (
      <Route
        {...rest}
        render={routeProps =>
          !!currentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/App"} />
          )
        }
      />
    );
  };

export default PrivateRoute;