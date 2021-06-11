import React, {useState, useEffect} from 'react'
import './Slide.css'
import SliderData from './SliderData'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
function Slider() {
    const [count, setcount] = useState(1);
    const lenght=SliderData.length;
    const Left=()=>{
        let Count=count;
        setcount(Count===1?lenght:--Count)
        console.log(count)
    }
    const Right=()=>{
        let Count=count;
        setcount(Count===lenght?1:++Count)
    }
    useEffect(() => {
        let Count=count;
        let a=setInterval(()=>{
            Count=(Count===lenght)?1:(Count+1);
            setcount(Count);
        }, 5000)
        return ()=>{
            clearInterval(a)
        }
    })

    return (
        <div className="Slider">
            {
                SliderData.map((item, index)=>{
                    return count===item.id?(
                    <div className="slider_container" key={index}>
                        <img src={item.image} alt="" className="slider__img" />
                        <div className="slider__box" style={{left:item.type_text+"%"}}>
                            <h3 className="slider_title">{item.title}</h3>
                            <h1 className="slider_content">{item.content}</h1>
                            <p className="slider_context">{item.context}</p>
                            <button className="btn btn_slider">{item.button}</button>
                        </div>
                    </div>
                    ):false
                })
            }
            <div className="button__left" onClick={Left}>
                <IoIosArrowBack/>
            </div>
            <div className="button__right" onClick={Right}>

                <IoIosArrowForward/>
            </div>
        </div>
    )
}

export default Slider
