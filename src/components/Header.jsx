import React from 'react'
import './style.css'
import { BiSearchAlt2 } from "react-icons/bi";



const Header = () => {
    return (
        <div className='header'>
            <div className='search'>
                <input type="text" placeholder="Search.." className='search-bar'/>
                <button className='search-button'><BiSearchAlt2 /></button>

            </div>
        </div>
    )
}

export default Header