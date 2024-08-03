import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const isAdmin = localStorage.getItem("isAdmin")

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

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

          {isAdmin?(
          <li>
            <NavLink to='/admin'>
              Admin
            </NavLink>
          </li>
        ):""}

          {isLoggedIn ? (
            <li>
              <button
                className="bg-blue-400 text-2xl border-2 font-bold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <NavLink to="/Login">
                <li>
                  <button className="bg-blue-400 text-2xl border-2 font-bold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                    Login
                  </button>
                </li>
              </NavLink>

              <NavLink to="/Register">
                <li>
                  <button className="bg-blue-400 text-2xl border-2 font-bold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                    Register
                  </button>
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
