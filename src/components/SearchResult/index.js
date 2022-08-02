import React from "react";
import { Link } from "react-router-dom";
import imagenotfound from '../../asset/Image-not-found.png'
import './style.css'

const SearchResult = (props) => {
    const {search, data, notFound} = props

    const getImage = (image) => {
        if(image != null) {
            return image
        } else {
            return imagenotfound
        }
    }

    const getName = (name) => {
        if (name != null) {
            return name
        } else {
            return "Car"
        }
    }

    const dislayFilterData = (item) => {
        if (item.length === 0) {
            return (
                data.map((item) => (
                    <div className="card-result">
                        <div className="image-box">
                            <img src={getImage(item.image)} alt=""/>
                        </div>
                        <p>{getName(item.name)}</p>
                        <p>{item.price}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link to={`/detail/${item.id}`}><button>Pilih Mobil</button></Link>
                    </div>
                ))
            )
        } else {
            return (
                search.map((item) => (
                    <div className="card-result">
                        <div className="image-box">
                            <img src={getImage(item.image)} alt=""/>
                        </div>
                        <p>{getName(item.name)}</p>
                        <p>{item.price}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link to={`/detail/${item.id}`}><button>Pilih Mobil</button></Link>
                    </div>
                ))
            )
        }
    }


    return (
        <div>
            <div className="not-found">{!!notFound && <h1>Data tidak ditemukan</h1>}</div>
            <div className="search-result">
                {dislayFilterData(search)}
            </div>
        </div>
    )
}

export default SearchResult;