import React, {useState} from 'react'
import FoodSwiper from './components/Swiper/FoodSwiper'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Menu.css'
import spaghettiIcon from '../assets/icons/spaghetti.png'
import fastFoodIcon from '../assets/icons/fast-food.png'
import friedChicken from '../assets/icons/fried-chicken.png'
import sodaIcon from '../assets/icons/soda.png'
import { Button } from 'react-bootstrap';

function Menu() {

    const [category, setCategory] = useState('all')

    return (
        <div className='menu' style={{ paddingTop: '20vh', textAlign: 'center' }}>
            <div className='menu-filter' style={{ display: 'flex', gap: '3vw', alignItems: 'center', justifyContent: 'center' }}>
                <img className='filter-icon' src={fastFoodIcon}
                    title='https://www.flaticon.com/free-icons/fast-food'></img>
                <img className='filter-icon' src={friedChicken}
                    title='https://www.flaticon.com/free-icons/fried-chicken'></img>
                <img className='filter-icon' src={spaghettiIcon}
                    title='https://www.flaticon.com/free-icons/pasta'></img>
                <img className='filter-icon' src={sodaIcon}
                    title='https://www.flaticon.com/free-icons/soda'></img>
            </div>
            <h1 className='content-title'>Hôm nay ăn gì ?</h1>
            <FoodSwiper category='Fried_Chicken'></FoodSwiper>
            <h1 className='content-title'>Hôm nay ăn gì ?</h1>
            <FoodSwiper category='Fried_Chicken'></FoodSwiper>
            <h1 className='content-title'>Hôm nay ăn gì ?</h1>
            <FoodSwiper category='Fried_Chicken'></FoodSwiper>
        </div>
    )
}

export default Menu
