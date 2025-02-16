import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <nav className=" border-gray-200  bg-emerald-500 fixed bottom-0 left-0 right-0 text-center  text-white">
     <div className="row justify-around">
      <div><h1>Developer : <span className=' text-black'>Mazen Mohamed</span></h1></div>


      <div><h1>My accounts : <Link to={"https://www.linkedin.com/in/mazen-mohamed-0a973b340/"}>LinkedIn</Link> | <Link to={"https://github.com/Eng-Mazen22"}>GitHub</Link>  </h1>
      
      </div>

     </div>
</nav>
  )
}
