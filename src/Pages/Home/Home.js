import React from 'react'
import Slider from './Slider/Slider'
import {Link} from 'react-router-dom'
import "./Home.css"
import Section from '../../component/Section/Section'
import SectionSlider from '../../component/SectionSlider/SectionSlider'
import{connect} from 'react-redux'
function Home({product, customer}) {
    return (
        <div className="Home">
            <div className="Banner">
                <div className="Banner__sale">
                    <div className="sale__content">
                        <h2 className="sale__title">
                            Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer 
                            <Link to="/">
                                Shop Now
                            </Link>
                        </h2>     
                    </div>
                </div>
                <Slider/>
            </div>
            <Section/>
            <div className="Home_List grid wide">
                <div className="row">
                    <div className="List_title">
                        <h1>Trending This Week</h1>
                        <ul className="List_title_menu">
                            <li className="List_title_item " >
                                <Link to="/" className="activated">Men</Link>
                            </li>
                            <li className="List_title_item">
                                <Link to="/">Woman</Link>
                            </li>
                            <li className="List_title_item">
                                <Link to="/">Baby</Link>
                            </li>
                            <li className="List_title_item">
                                <Link to="/">Fashion</Link>
                            </li>
                        </ul>
                    </div>
                    <SectionSlider Items={product} number={4} type="Fashion" ItemName="Fashion" />
                </div>
  
                <div className="row">
                    <div className="List_title">
                        <h1 style={{textAlign:"center", width:"100%"}}>You May Be</h1>
                    </div>
                    <SectionSlider Items={product} number={4} type="Skillcare" ItemName="Fashion" />
                </div>
                
            </div>
            <div className="Home_custom">
                <div className="grid wide">
                    <div className="row">
                    <SectionSlider Items={customer} number={1} type="Fashion" ItemName="Customer"/>
                    </div>
                </div>
            </div>  
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        product:state.shop.product,
        customer:state.shop.customer
    }
}
export default connect(mapStateToProps)(Home)
