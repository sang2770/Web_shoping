import React from 'react'
import './SectionTitle.css'
import {Link} from 'react-router-dom'
function SectionTitle({nameSection}) {
    return (
        <div className="SectionTitle_container">
            <div className="SectionTitle_title grid wide">
                <h1>{nameSection}</h1>
                <ul className="SectionTitle_redirect">
                    <li className="SectionTitle_item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="line"></li>
                    <li className="SectionTitle_item">
                        <Link to={"/"+nameSection}>{nameSection}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SectionTitle
