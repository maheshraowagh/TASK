import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
   

    const LogoutUser = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  };

  useEffect(() => {
    LogoutUser();
  }, []);

  return <Navigate to="/Login" />;
};

export default Logout;
