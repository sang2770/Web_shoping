import React from 'react'
import './Custom.css'
function Custom({custom}) {
    return (
        <div className="custom_container">
            <div className="Custom_title">
                {custom.title}
            </div>
            <div className="Custom_content">
                {custom.content}
            </div>
            <div className="Custom_customer">
                <div className="customer_name">
                    {custom.name}
                </div>
                <div className="customer_job">
                    {custom.job}
                </div>
            </div>
        </div>
    )
}

export default Custom
