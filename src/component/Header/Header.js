import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <div className="Header ">
            <div className="container grid wide">
                    <div className="Header__Left ">
                        <ul className="Left__menu">
                            <li className="Left__item"><Link to='/'>About Us</Link></li>
                            <li className="Left__item"><Link to='/'>Privacy</Link></li>
                            <li className="Left__item"><Link to='/'>FAQ</Link></li>
                            <li className="Left__item"><Link to='/'>Careers</Link></li>
                        </ul>
                    </div>
                    <div className=" Header__Right ">
                        <ul className="Right__menu">
                            <li className="Right__item"><Link to='/'>My Wishlist</Link></li>
                            <li className="Right__item"><Link to='/'>Track Your Order</Link> </li>
                            <li className="Right__item">
                                <ul className="Right_item_menuIcon">
                                    <li className="MenuIcon"><Link to='/'><FaFacebook/></Link></li>
                                    <li className="MenuIcon"><Link to='/'><FaYoutube/></Link></li>
                                    <li className="MenuIcon"><Link to='/'><FaInstagram/></Link></li>
                                    <li className="MenuIcon"><Link to='/'><FaTwitter/></Link></li>
                                    <li className="MenuIcon"><Link to='/'><FaLinkedin/></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Header
