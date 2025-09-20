import React from 'react'
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Hero from '../../components/Hero/Hero';
import FoodSwiper from '../../components/Swiper/FoodSwiper';

export default function Home() {

  return (
    <>
      <div className='home'>

        {/* Hero banner section */}
        <Hero />

        {/** Home page content */}
        <div className='home-content'>
          <h1 className='content-title'>Hôm nay ăn gì !</h1>
          <FoodSwiper category='Fried_Chicken'></FoodSwiper>
        </div>
      </div>
    </>
  )
}
