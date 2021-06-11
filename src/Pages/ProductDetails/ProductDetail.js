import React, {useState} from 'react'
import './ProductDetail.css'
import SectionTitle from '../../component/Section_title/SectionTitle'
import {connect} from 'react-redux'
import {addToCart} from '../../Redux/Action/Action'
import {BsStarFill, BsStarHalf,} from 'react-icons/bs'
import {GiShare} from 'react-icons/gi'
function ProductDetail({Item, AddCart}) {
    const descriptions=Item.Descriptions
    const [View, setView] = useState(descriptions)
    const Change=(Des)=>{
        setView(Des);
    }
    return (
        <div className="ProductDetails">
            <SectionTitle nameSection="ProductDetails"/>
            <div className=" grid wide">
                <div className="row Details_container ">
                    <img src={Item.image} alt="ImageProduct" className="col l-4 Detail_img"/>
                    <div className="col l-8 Detail_content">
                        <h1 className="Detail_name">{Item.name}</h1>
                        <h2 className="Detail_author">{Item.author}</h2>
                        <h2 className="Detail_Prince">${Item.sale}.00 <span>${Item.price}.00</span>  </h2>
                        <ul className="Detail_stars">
                            <li className="Detail_star"><BsStarFill/></li>
                            <li className="Detail_star"><BsStarFill/></li>
                            <li className="Detail_star"><BsStarFill/></li>
                            <li className="Detail_star"><BsStarFill/></li>
                            <li className="Detail_star"><BsStarHalf/></li>
                        </ul>
                        <div className="Detail_options">
                            <button className="btn_Detail AddToCart" onClick={()=>{AddCart(Item.id)}}><h3>Add To Cart</h3></button>
                            <button className="btn_Detail Share"><h3><GiShare/></h3></button>
                        </div>
                    </div>
                </div>
                <div >
                    <ul className="Menu_View">
                        <li className="View_Item" onClick={()=>Change(Item.Descriptions)}>Descriptions</li>
                        <li className="View_Item" onClick={()=>Change(Item.author)}>Author</li>
                    </ul>
                    <div className="View_context">
                        <p>{View}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        Item:state.shop.currentItem
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        AddCart:(id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
