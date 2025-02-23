import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Forget() {
      let {UserLogin , setUserLogin} = useContext(UserContext)
    const navigate = useNavigate()

 async function forget(email) {
   await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,email )
      .then(response => {
        console.log(response);
        navigate("/FreshCart/login")
        setUserLogin(res.data.token)
      })
      
     

  }
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    

    onSubmit: forget,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto my-8 ">
        <div className="relative z-0 w-full mb-5 group">
          <input
          value={ formik.values.email}
          onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            name="email"
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
          <button type="submit"  className="btn mt-5">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
