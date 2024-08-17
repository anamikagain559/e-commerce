import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
      logOut()
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Logged out successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    };
    return (
        <div className="navbar bg-base-100 w-[1280px] mx-auto ">
        <div className="navbar-start sticky">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/addBlog">Add Blog</NavLink>
            </li>
            <li>
            <NavLink to="/allBlogs">All blogs</NavLink>
            </li>
            <li>
            <NavLink to="/featureBlogs">Featured Blogs</NavLink>
            </li>
            <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
              
            </li> */}
            {user ? (
            <>
              <img
                src={user.photoURL}
                className="h-12 w-12 rounded-full"
                alt=""
                title={user.displayName}
              />
              <button
                onClick={handleSignOut}
                className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-4 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-3 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-4 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4">
                  Register
                </button>
              </Link>
            </>
          )}
            
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold uppercase">
            <span className="bg-red-500 text-white px-2">Happy</span> Mart
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/addBlog">Add Blog</NavLink>
            </li>
            <li>
            <NavLink to="/allBlogs">All blogs</NavLink>
            </li>
            <li>
            <NavLink to="/featureBlogs">Featured Blogs</NavLink>
            </li>
            <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
              
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
            <>
              <img
                src={user.photoURL}
                className="h-12 w-12 rounded-full"
                alt=""
                title={user.displayName}
              />
              <button
                onClick={handleSignOut}
                className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-4 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-3 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-4 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4">
                  Register
                </button>
              </Link>
            </>
          )}
  
        </div>
      </div>
    );
};

export default Header;