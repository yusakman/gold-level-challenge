import React from "react";
import icon from '../../asset/fi_users.png'
import './style.css';

const DetailResult = (props) => {
    const {include, exclude, refund, car} = props;
    console.log("Car", car.price)

    return (
        <div className="detail-result">
            <div className="tentang-paket">
                <h2>Tentang Paket</h2>
                <div className="include">
                    <h2>Include</h2>
                    {include.map((item) => 
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )}
                </div>
                <div className="exclude">
                    <h2>Exclude</h2>
                    {exclude.map((item) => 
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )}
                </div>
                <div className="refund">
                    <h2>Refund, Reschedule, Overtime</h2>
                    {refund.map((item) => 
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="detail-mobil">
                <div>
                    <img src={car.image} className="car-name"></img>
                    <h3>{car.name}</h3>
                    <span><img src={icon}></img>{car.category}</span>
                    <div className="total">
                        <h3>Total</h3>
                        <p>{car.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DetailResult;