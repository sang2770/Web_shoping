import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../Image/logo.PNG'
import {Link} from 'react-router-dom'
import {IoIosArrowDown} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {connect} from 'react-redux'
function Navbar({cart}) {
    const [click, setclick] = useState(false);
    const [MobileClick, setMobileClick] = useState(false);
    const [count, setcount] = useState(0);
    useEffect(()=>{
        let Cartcount=0;
        cart.forEach(item=>{
            Cartcount+=item.qty
        });
        setcount(Cartcount);
    },[cart])
    return (
        <div className="Navbar">
            <div className="Container_Nav grid wide">
                <div className="Nav_Logo" style={{color:"#000"}}>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className="Nav_Menu">
                    <li className="Nav_item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="Nav_item">
                        <Link to="/">Men</Link>
                    </li>
                    <li className="Nav_item">
                        <Link to="/">Woman</Link>
                    </li>
                    <li className="Nav_item">
                        <span className="Nav_item_news">
                            News
                        </span>
                        <Link to="/">Baby Collection</Link>
                    </li>
                    <li className="Nav_item">
                        <Link to="/">
                        Pages <IoIosArrowDown/>
                        </Link>
                        <div className="Nav_item_container">
                            <ul className="Nav_item_menu">
                                <li className="Nav_item_child">
                                    <Link to="/">Login</Link>
                                </li>
                                <li className="Nav_item_child">
                                    <Link to="/">Cart</Link>
                                </li>
                                <li className="Nav_item_child">
                                    <Link to="/">Product Details</Link>
                                </li>
                                <li className="Nav_item_child">
                                    <Link to="/">Product Checkout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="Nav_item">
                        <Link to="/">Blog</Link>
                    </li>
                    <li className="Nav_item">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                <ul className="Nav_options">
                    <li className="Nav_options_item">
                        <Link to="/"><FiSearch/> </Link>
                    </li>
                    <li className="Nav_options_item">
                        <Link to="/"><AiOutlineUser/> </Link>
                    </li>
                    <li className="Nav_options_item">
                        <Link to="/Cart">
                            <AiOutlineShoppingCart/> 
                            <span className="Shop_count">{count}</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="Navbar_menu_mobile">
                <div className="MenuMobile_button">
                    <button className="MenuMobile" onClick={()=>{setclick(!click); if(MobileClick) {setMobileClick(false)}}}>Menu <FaBars/></button>
                </div>
                <ul className={click?"Mobile_Menu active":"Mobile_Menu"}>
                        <li className="Mobile_item"> <Link to="/">Home</Link></li>
                        <li className="Mobile_item"><Link to="/">Men</Link></li>
                        <li className="Mobile_item"><Link to="/">Woman</Link></li>
                        <li className="Mobile_item"><Link to="/">Baby Collection</Link></li>
                        <li className="Mobile_item" onClick={()=>{setMobileClick(!MobileClick)}}><Link to="/">Pages <IoIosArrowDown/></Link>
                            <div className={MobileClick?"Mobile_item_container active":"Mobile_item_container"}>
                                <ul className="Mobile_item_menu">
                                    <li className="Mobile_item_child"><Link to="/">Login</Link></li>
                                    <li className="Mobile_item_child"><Link to="/">Cart</Link></li>
                                    <li className="Mobile_item_child"><Link to="/">Product Details</Link></li>
                                    <li className="Mobile_item_child"><Link to="/">Product Checkout</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="Mobile_item"><Link to="/">Blog</Link></li>
                        <li className="Mobile_item"><Link to="/">Contact</Link></li>
                    </ul>
            </div>
        </div>
    )
}
// get State
const mapStateToProps=(state)=>{
    return {
        cart:state.shop.cart
    }
}
export default connect(mapStateToProps)(Navbar)
