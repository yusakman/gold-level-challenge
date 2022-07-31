import React from "react";
import './style.css';
import Select from 'react-select'

const SearchBox = (props) => {
    const {handleChangeName, handleSearch} = props;

    const status = [
        {
            value: "true",
            label: "true"
        },
        {
            value: "false",
            label: "false"
        }
    ]

    return (
        <div className="search-box">
            <form>
                <ul>
                    <li>
                        <p>Nama Mobil</p>
                        <input placeholder="Nama Mobil" type="text" id="car-name" name="car-name" onChange={(e) => handleChangeName(e)}></input>
                    </li>
                    <li>
                        <p>Kategori</p>
                        <input placeholder="Kategori" type="text" id="kategori" name="categori" disabled></input>
                    </li>
                    <li>
                        <p>Harga</p>
                        <input placeholder="Harga" type="text" id="harga" name="harga" disabled></input>
                    </li>
                    <li>
                        <p>Status</p>
                        <Select options={status} />
                    </li>
                </ul>
                <button onClick={(e) => handleSearch(e.preventDefault())}>Cari Mobil</button>
            </form>
        </div>
    )
}

export default SearchBox;