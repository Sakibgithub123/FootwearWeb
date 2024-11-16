import { useContext, } from "react";
import { Link, NavLink, } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import "../Navbar/Nav.css"
import useCart from "../../hooks/useCart";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const email = user?.email;
  const [cart]=useCart(email)

  let from = location.state?.from?.pathname || '/';

  const nav =
    <>
      <li className="text-white text-xs md:text-base"><NavLink className="text-xs md:text-base" to={'/'}>Home</NavLink></li>
      <li className="text-white text-xs md:text-base"><NavLink className="text-xs md:text-base"  to={'/shop'}>Shop</NavLink></li>
      <li className="text-white text-xs md:text-base"><NavLink className="text-xs md:text-base"  to={'/cart'}>
        Cart <span>({cart.length})</span>
        {/* <div className="badge t-1">+99</div> */}
      </NavLink></li>
      <li className="text-white text-xs md:text-base"><NavLink className="text-xs md:text-base"  to={'/dashboard'}>Dashboard</NavLink></li>
      <li className="text-white text-xs md:text-base"><NavLink className="text-xs md:text-base"  to={'/about'}>About Us</NavLink></li>
      

    </>




  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div className="navbar bg-red-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xs md:text-base dropdown-content font-semibold bg-red-700  rounded-box z-[50] mt-3 w-40 p-2 shadow">
            {nav}
            <li className="dropdown">
              <a className="text-xs md:text-base" >My Account</a>
              <ul className="p-2 z-50 ">
                <li><NavLink className='link link-hover text-xs md:text-base' to={'/myOrders'}>My Orders</NavLink></li>
                <li><NavLink className='link link-hover text-xs md:text-base' to={'wishlist'}>My Wishlist</NavLink></li>
              </ul>
            </li>
            <li className="text-white"><NavLink className="text-xs md:text-base"  to={'/contact'}>Contact</NavLink></li><li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-sm -ml-16 md:-ml-0 -mt-10 md:-mt-0 italic md:text-left md:text-xl font-black text-orange-400">FootWear</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold bg-red-700 text-xs md:text-base">
          {nav}
          <li className="text-white">
            <details>
              <summary>My Account</summary>
              <ul className="p-2 z-50 bg-red-700">
              <li><NavLink  className='link link-hover text-xs md:text-base' to={'/myOrders'}>My Orders</NavLink></li>
              <li><NavLink  className='link link-hover text-xs md:text-base' to={'wishlist'}>My Wishlist</NavLink></li>
              </ul>
            </details>
          </li>
          <li className="text-white"><NavLink className="text-xs md:text-base"  to={'/contact'}>Contact</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end gap-3 font-semibold">
        {
          user ?
            <>
              <p className="text-[10px] md:text-sm">{user?.displayName}</p>
              <button onClick={handleSignOut} className="py-1 md:py-2 px-2 md:px-4 text-[10px] md:text-sm  bg-orange-400 rounded text-white">Log Out</button>
            </>
            :
            <>
              <Link to={'/login'}><button className="py-2 px-4 text-[10px] md:text-sm bg-orange-400 rounded text-white">Log In</button></Link>
              <Link to={'/signup'}> <button className="py-2 px-4 text-[10px] md:text-sm bg-orange-400 rounded text-white">Sign Up</button></Link>

            </>

        }
      </div>
    </div>

    //nav

  );
};

export default NavBar;