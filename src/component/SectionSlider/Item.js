import React from 'react'
import './Item.css'
import {AiOutlineShoppingCart, AiOutlineHeart, AiOutlineZoomIn} from 'react-icons/ai'
import {connect} from 'react-redux'
import {addToCart, loadCurrentItem} from '../../Redux/Action/Action'
import {Link} from 'react-router-dom'
function Item({product, addToCart, LoadItem}) {
    return (
            <div className=" slider_product_box">
                <div className="box_img">
                    <img src={product.image} alt="" />
                    <div className="box_options_container">
                        <ul className="box_options">
                            <li className="box_options_item" onClick={()=>addToCart(product.id)}> <AiOutlineShoppingCart/> </li>
                            <li className="box_options_item"><AiOutlineHeart/></li>
                            <li className="box_options_item"> <Link to={`/ProductDetails/${product.id}`} style={{color:"black"}} onClick={()=>LoadItem(product)}><AiOutlineZoomIn/></Link> </li>
                        </ul>
                    </div>
                </div>

                <div className="box_name">{product.name}</div>
                <div className="box_price">$ {product.price}.00 <span> ${product.sale}.00</span></div>
            </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addToCart:(id)=>{dispatch(addToCart(id))},
        LoadItem:(item)=>{dispatch(loadCurrentItem(item))}
    }
}
export default connect(null, mapDispatchToProps)(Item)
