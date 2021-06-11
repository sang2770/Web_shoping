import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import {IoIosArrowUp} from 'react-icons/io'
import logo from '../../Image/17.webp'
function Footer() {
    return (
        <div className="Footer">
            <div className="ScrollToTop" onClick={()=>{window.scrollTo(0, 0)}}>
                <IoIosArrowUp/>
            </div>
            <div className="Footer_Container grid wide">
                <div className="Footer_contact">
                    <div className="Contact_Title">
                        <h1>Subscribe Newsletter</h1>
                        <p>Subscribe newsletter to get 5% on all products.</p>
                    </div>
                    <div className="Contact_form">
                        <input type="text" className="form-control" placeholder="Enter your email"/>
                        <button className="btn btn-sub" type="submit">Subscibe</button>
                    </div>
                    <ul className="Contact-icon">
                        <li className="icon_item">
                            <Link><FaFacebook/></Link>
                        </li>
                        <li className="icon_item">
                            <Link><FaTwitter/></Link>
                        </li>
                        <li className="icon_item">
                            <Link><FaYoutube/></Link>
                        </li>
                    </ul>
                </div>
                <div className="Footer_Product">
                    <div className="Product_logo">
                        <img src={logo} alt="log" />
                    </div>
                    <div className="Footer_menu">
                        <div className="Footer_Menu_title">Shop Men</div>
                        <ul className="Footer_Menu_items">
                            <li className="Footer_items">
                                <Link>Clothing Fashion</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Winter</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Summer</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Formal</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Casual</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer_menu">
                        <div className="Footer_Menu_title">Shop Men</div>
                        <ul className="Footer_Menu_items">
                            <li className="Footer_items">
                                <Link>Clothing Fashion</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Winter</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Summer</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Formal</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Casual</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer_menu">
                        <div className="Footer_Menu_title">Shop Men</div>
                        <ul className="Footer_Menu_items">
                            <li className="Footer_items">
                                <Link>Clothing Fashion</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Winter</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Summer</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Formal</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Casual</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer_menu">
                        <div className="Footer_Menu_title">Shop Men</div>
                        <ul className="Footer_Menu_items">
                            <li className="Footer_items">
                                <Link>Clothing Fashion</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Winter</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Summer</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Formal</Link>
                            </li>
                            <li className="Footer_items">
                                <Link>Casual</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Footer_author">
                    <h1><span>Copyright ©2021 All rights reserved</span></h1>
                    <span className="border"></span>
                    <h1><span>Code By Sang Nguyen </span></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
