import React, { Component, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {navList, stList, cards, testimoni, faq, info, iconFooter, include, exclude, refund} from "../../const/static";
import Banner from "../../components/Banner";
import SearchBox from "../../components/SearchBox";
import DetailResult from "../../components/DetailResult";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DetailCar = () => {
    const [car, setCar] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`).then((res) => setCar(res.data)).catch((err) => console.log(err))
    }, [])

    const props = {
        navList,
        stList,
        cards,
        testimoni,
        faq,
        info,
        iconFooter,
        include,
        exclude,
        refund,
        car
    }

    return (
        <div>
            <Navbar {...props}/>
            <Banner {...props}/>
            <SearchBox {...props}/>
            <div>
                {
                    !!Object.keys(car)
                }
                <DetailResult {...props} />
            </div>
            
            <Footer {...props}/>
        </div>
    )
}

export default DetailCar;