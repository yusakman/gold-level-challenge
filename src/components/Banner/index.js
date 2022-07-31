import React from "react";
import carImage from '../../asset/img_car.png'
import { Link } from "react-router-dom";
import './style.css'

const Banner = () => {
    return ( 
        <div className='banner'>
            <div className='left-section'>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to={'/carimobil'}><button>Mulai Sewa Mobil</button></Link>
            </div>
            <div className='right-section'>
                <img src={carImage} id="car-image" alt=""></img>
            </div>
        </div> 
    );
}
 
export default Banner;