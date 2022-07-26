import React from "react";
import './style.css'
// import icon1 from '../../asset/cards-logo/icon_1.svg'

const WhyUs = (props) => {
    const {cards} = props;

    return ( 
        <div className='why-us'>
            <h2>Why Us</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <ul >
                {cards.map((item) => (
                    <li className='cards'>
                        <img src={item.logo}></img>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
            
        </div>
     );
}
 
export default WhyUs;