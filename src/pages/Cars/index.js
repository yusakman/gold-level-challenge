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
    const [notFound, setNotFound] = useState(false)

    const handleChangeName = (e) => {
        setName(e.target.value)
        if(!e.target.value.length) {
            setSearch([])
            setNotFound(false)
        }
        
    }

    useEffect(() => {
        axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car").then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [])

    const handleSearch = () => {
        let newSearch = data.filter((data) => (
            data.name === name
        ));
        if(!newSearch.length) {
            setNotFound(true)
        }
        setSearch(newSearch)
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
        notFound
    }

    return (
        <div>
            <Navbar {...props}/>
            <Banner/>
            <SearchBox {...props}/>
            {/* {!!notFound && <h1>Data yang anda masukan tidak ditemukan</h1>} */}
            <SearchResult {...props}/>
            <Footer {...props}/>
        </div>
    )
}

export default Cars