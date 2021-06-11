import React from 'react'
import './Section.css'
import {dataSection} from './SectionData'
import {Link} from 'react-router-dom'
function Section() {
    return (
        <div className="Sections">
            <div className="Section__container grid wide">
                <div className="row">
                    {
                        dataSection.map((item, index)=>{
                            return (
                                <div className="Section__item col l-4 c-12 m-12" key={index}>
                                    <img src={item.image} alt={item.name} className="Section_img"/>
                                    <div className="Section_gray"></div>
                                    <h1 className="Section_title">{item.name}</h1>
                                    <Link to="/" className="Section_shop">Shop now</Link>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Section
