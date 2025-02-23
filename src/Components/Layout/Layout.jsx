import React from 'react'
import style from "./Layout.module.css"
import Navbar from './../Navbar/Navbar';
import Footer from './../footer/footer';
import { Outlet } from 'react-router-dom';
import loogoo from '../../assets/light-patten.svg'
export default function Layout() {
  return <>


<Navbar />
<div className="container  mx-auto py-20   w-[85%]  lll  ">

  <Outlet/>
</div>

<Footer />
   </>
  
}
