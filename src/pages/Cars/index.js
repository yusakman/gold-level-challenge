import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner"
import {navList, stList, cards, testimoni, faq, info, iconFooter} from "../../const/static";
import SearchBox from "../../components/SearchBox";
import axios from "axios";
import SearchResult from "../../components/SearchResult";

const Cars = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("");
    const [search, setSearch] = useState([])

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car").then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [])

    const handleSearch = () => {
        let newSearch = data.filter((data) => (
            data.name === name
        ));
        setSearch(newSearch)
    }

    const handleCarId = (e) => {
        console.log("Clicked")
        console.log(e)
    }

    const props = {
        navList,
        stList,
        cards,
        testimoni,
        faq,
        info,
        iconFooter,
        name,
        handleChangeName,
        handleSearch,
        data,
        search,
        handleCarId
    }

    return (
        <div>
            <Navbar {...props}/>
            <Banner/>
            <SearchBox {...props}/>
            <SearchResult {...props}/>
            <Footer {...props}/>
        </div>
    )
}

export default Cars