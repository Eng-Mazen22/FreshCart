import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/freshcart-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { cartContext } from "../../Context/CartContext";

export default function Navbar() {
  const [wish, setwish] = useState(false)
  let unNavigate = useNavigate();
  let { UserLogin, setUserLogin } = useContext(UserContext);
 let {number} = useContext(cartContext)
 
 function setWish() {
  if (wish == true) {
  setwish(false)
    
  }else{
  setwish(true)
    
  }
 }

  function SignOut() {
    localStorage.removeItem("setToken");
    setUserLogin(null);
    setWish()
    unNavigate("login");
  }

  return (
    <>
      <nav className=" border-gray-200 bg-white  shadow-lg  fixed top-0 left-0 right-0 z-50">
        <div className="md:flex hidden flex-wrap justify-center gap-3 lg:justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className=" flex  items-center gap-4">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                width={"200px"}
                className="h-8"
                alt="Flowbite Logo"
              />
            </Link>
            {UserLogin != null ? (
              <>
                <ul className=" flex gap-3">
                  <li>
                    <Link className=" text-slate-600" to="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-slate-600" to="Cart">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-slate-600" to="Category">
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-slate-600" to="product">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-slate-600" to="brand">
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-slate-600" to="WishList">
                      Whish List
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ul className=" flex gap-4">
              <Link to={"Cart"}><i class="fa-solid fa-cart-shopping cursor-pointer"></i></Link>
              <span className="">{number}</span>
            </ul>
            <ul className=" flex gap-5">
              {UserLogin != null ? (
                <li>
                  <span onClick={SignOut} className=" cursor-pointer">
                    Signout
                  </span>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="register">Register</Link>
                  </li>
                </>
              )}
              
            </ul>
          </div>
        </div>

        
        <div className="flex md:hidden flex-wrap gap-3 justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
        onClick={setWish}
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                width={"200px"}
                className="h-8"
                alt="Flowbite Logo"
              />
      </Link>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
      <i class="fa-solid fa-bars text-4xl cursor-pointer"onClick={setWish}></i>
     </div>
      </div>
      <div className={wish == true? '':'hidden'}>
        
      <div className=" flex flex-col items-center gap-4">
            {UserLogin != null ? (
              <>
                <ul className="flex-col text-center flex gap-7">
                  <li>
                    <Link onClick={setWish} className=" text-slate-600" to="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setWish} className=" text-slate-600" to="Cart">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setWish} className=" text-slate-600" to="Category">
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setWish} className=" text-slate-600" to="product">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setWish} className=" text-slate-600" to="brand">
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setWish} className=" text-slate-600" to="WishList">
                      Whish List
                    </Link>
                  </li>
                  {UserLogin != null ? (
                <li className="mb-3">
                  <span onClick={SignOut} className="  cursor-pointer">
                    Signout
                  </span>
                </li>
              ) : (
                null
              )}
                </ul>
              </>
            ) : (
              <>
                <ul className="flex-col text-center flex gap-7">

                  <li>
                    <Link onClick={setWish}  to="login">Login</Link>
                  </li>
                  <li>
                    <Link onClick={setWish} to="register">Register</Link>
                  </li>
                </ul>

                </>
            )}
          </div>

          
            
          </div>
      </nav>
    </>
  );
}
