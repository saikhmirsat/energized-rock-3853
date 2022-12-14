import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import { TiHeartOutline } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa';
import { BsFillHandbagFill } from 'react-icons/bs';

export default function Navbar2() {
    return (
        <div>
            <div className='navbar-2'>

                <div className='navbar-2-1st-div'>
                    <Link to="/women"><h3>WOMEN</h3></Link>
                    <Link to="/men"><h3>MEN</h3></Link>
                    <Link to="/kids"><h3>KIDS</h3></Link><span>/</span>
                    <Link to="/design"><h3>DESIGN+ART</h3></Link>
                </div>
                <div className='logo-div'>
                    <Link to="/women"><img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="" /></Link>
                </div>
                <div className='navbar-2-3rd-div'>
                    <Link to="search"><FaSearch size="20px" color='black' /></Link>
                    <Link to="/wishlist"><TiHeartOutline color='black' size="25px" /></Link>
                    <Link to="/cart"><BsFillHandbagFill color='black' size="20px" /></Link>
                </div>
            </div>
        </div>
    )
}