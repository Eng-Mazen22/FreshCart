import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  let {UserLogin , setUserLogin} = useContext(UserContext)

  const navigate = useNavigate()
  const [apiError, setapiError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  function handleLogin(value) {
    setIsLoading(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, value)
      .then(res => {
        setIsLoading(false);
        if (res.data.message == "success") {
         localStorage.setItem("setToken" , res.data.token)
         setUserLogin(res.data.token)
         navigate("/FreshCart")
          
          
        }
      })
      .catch(res => {
        console.log(res);
        setIsLoading(false);
        setapiError(res.response.data.message);
      });
  }

  let validation = yup.object().shape({
  
    email: yup.string().email("not is valid").required("email not required"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "password min length 6"),
  
  });

  let formik = useFormik({
    initialValues: {
    
      email: "",
      password: "",
     
    },
    validationSchema: validation,
    onSubmit: handleLogin,
  });

  return (
    <>
      {apiError ? (
        <div className=" w-1/2 mx-auto bg-red-600 text-white  font-bold rounded-lg  p-3">
          {apiError}
        </div>
      ) : null}
      <h1 className=" font-bold text-2xl text-center my-4 text-emerald-700">
        Login Now
      </h1>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
       
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-400 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Email address
          </label>
          {formik.errors.email && formik.touched.email ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
              role="alert"
            >
              <span>{formik.errors.email}</span>
            </div>
          ) : null}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-400 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Password
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
              role="alert"
            >
              <span>{formik.errors.password}</span>
            </div>
          ) : null}
        </div>
        
       
       <div className=" flex gap-4 items-center">
       <button
          type="submit"
          className="text-white bg-emerald-400 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-emerald-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-400 dark:hover:bg-emerald-400 dark:focus:ring-emerald-400"
        >
          {IsLoading ? <i className="fas fa-spinner fa-spin"></i> : "register"}
        </button>
       <Link to={"/FreshCart/register"}><span className=" text-blue-400 underline"> New account</span></Link>
       <Link to={"/FreshCart/Forget"}><span className=" text-blue-400 underline"> Forget Password</span></Link>
       </div>
      </form>
    </>
  );
}
