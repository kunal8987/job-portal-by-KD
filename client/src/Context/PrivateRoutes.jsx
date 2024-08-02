import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";

// PrivateRoutes component checks if the user is authenticated before rendering the children components.
const PrivateRoutes = ({ children }) => {
  // Using useContext to access the authentication state from the AuthContext.
  const state = useContext(AuthContext);
  // Using useNavigate hook to navigate to the login page if the user is not authenticated.
  const navigate = useNavigate();
  // Checking if the user is not authenticated.
  if (!state.authState.isAuth) {
    // Navigating to the login page if the user is not authenticated.
    return navigate("/auth/login");
  }
  // If the user is authenticated, rendering the children components.
  return children;
};

export default PrivateRoutes;
