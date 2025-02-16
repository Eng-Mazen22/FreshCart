import React from 'react'
import style from "./Home.module.css"
import RecentProduct from './../RecentProduct/RecentProduct';
import CategoriesSlider from '../categoriesSlider/categoriesSlider';
import MainSlider from '../MainSlider/MainSlider';

export default function Home() {
  return (
    <>
    <MainSlider />
    <CategoriesSlider />
    <RecentProduct />
    </>
  )
}
