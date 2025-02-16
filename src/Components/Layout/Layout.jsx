import React from 'react'
import style from "./Layout.module.css"
import Navbar from './../Navbar/Navbar';
import Footer from './../footer/footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>


<Navbar />
<div className="container  mx-auto py-20   w-[85%]  ">

  <Outlet/>
</div>

<Footer />
   </>
  
}
