import { useEffect, useState } from "react";
import { createContext } from "react";
const sessionData = window.sessionStorage;
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: "",
    user: "",
  });

  let payload = JSON.parse(sessionData.getItem("adminToken"));
  let profile = JSON.parse(sessionData.getItem("userRole"));

  useEffect(() => {
    if (payload) {
      setState((prevState) => ({
        ...prevState,
        isAuth: true,
        user: profile,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        isAuth: false,
      }));
    }
  }, [payload, profile]);

  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
      user: profile ? profile : "default",
    });
  };

  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: sessionData.removeItem("adminToken"),
    });
  };
  return (
    <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
