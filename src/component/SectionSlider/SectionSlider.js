import React from 'react'
import Item from './Item'
import Custom from './Custom'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import './SectionSlider.css'
SwiperCore.use([Navigation, Pagination, Scrollbar,Autoplay, A11y ]);
function SectionSlider({Items, number, type, ItemName}) {
    return (
        <div className="SectionSlider">
            <Swiper
            navigation
            breakpoints={
                  {
                    320: {
                        slidesPerView: number-2>0?number-2:1,
                        spaceBetween: 5
                      },
                    630: {
                        slidesPerView: number-1>0?number-1:1,
                        spaceBetween: 10
                      },
                    1060: {
                        slidesPerView: number,
                        spaceBetween: 20
                      }
                  }
            }
            // loop={true}
            // loopedSlides={30}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{delay:4000}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => console.log('slide change')}
            >
            {
                ItemName==="Customer"?(
                    Items.map((item, index)=>{
                        return <SwiperSlide key ={index} ><Custom custom ={item} /> </SwiperSlide>
                    })
                ):(
                    Items.map((item, index)=>{
                        return type===item.type?<SwiperSlide key ={index} ><Item product={item}/></SwiperSlide>:false
                    })
                )
            }
            </Swiper>
        </div>
                    
    )
}

export default SectionSlider
