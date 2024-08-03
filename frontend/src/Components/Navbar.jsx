
import { NavLink } from "react-router-dom";
import { useAuth } from "../pages/auth";

const Navbar = () => {

  const {isLoggedIn} = useAuth()
  

 

  

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-blue-300">
      <div className="text-3xl font-bold">
        <h1>MAXSHOP</h1>
      </div>

      <div className="flex">
        <ul className="flex gap-[2vw] items-center text-2xl">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/AboutUs">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/AllProducts">
            <li>All Products</li>
          </NavLink>

        
          <li>
            <NavLink to='/admin'>
              Admin
            </NavLink>
          </li>
        

{isLoggedIn? (
            <li className="px-3 mr-3">
          <NavLink to="/logout">
            Logout
          </NavLink>
          </li>
        ) : (
          <>
          <li>
            <NavLink to="/Login">
              Login
            </NavLink>
            </li>

            <li>
            <NavLink to="/register">
              Register
            </NavLink>
            </li>
           
          </>
          
        )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
