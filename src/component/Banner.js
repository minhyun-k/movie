import React, { useEffect, useState } from 'react';
import '../css/component/banner.scss'
import { Button, Button2 } from './Button'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/effect-creative'
import 'swiper/css';
// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';
import apiFun from '../api/apiFun';
import apiConfig from '../api/apiConfig';
import { Link } from 'react-router-dom';






const Banner = (props) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        apiFun.List(props.url)
        .then(res=>{
            let d = res.data.results.splice(0,6)
            setItems(d)
        })
    },[])


   

// console.log(apiConfig.l(item.backdrop_path))
  return (
    <div style={{height:'100%'}}>
        <Swiper
            // spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            grabCursor={true}
            effect={'creative'}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: true,
            // }}
            creativeEffect={{
                prev: {
                    shadow: true,
                    origin: 'left center',
                    translate: ['-5%', 0, -200],
                    rotate: [0, 100, 0],
                },
                next: {
                    origin: 'right center',
                    translate: ['5%', 0, -200],
                    rotate: [0, -100, 0],
                },
            }}
            modules={[Autoplay, EffectCreative]}
            className="mySwiper6 banner"
        >
            {
                items.map((item)=>{                
                    return <SwiperSlide className='b_back' style={{backgroundImage:`url(${apiConfig.l(item.backdrop_path)})`}} key={item.id}>
                                <Banner_item item={item} cateType="movie"/> 
                            </SwiperSlide>                                           
                })
            }

        </Swiper>
    </div>
  )
}

const Banner_item = (props) => {
    console.log(window.innerWidth)
    console.log(props.item.title.slice(0,24))

    return(
        <div className='banner_item container'>
            <div className='b_text'>
                <div>
                    <h2>{props.item.title}</h2>
                </div>
                <div>
                    <p>{window.innerWidth > 768 ? props.item.overview : props.item.overview.slice(0,24)}</p>
                </div>
                <Link to="/detail" state={{type:props}}>
                    <Button/>
                </Link>
                <Link to="/detail" state={{type:props}}>
                    <Button2/>
                </Link>
            </div>
            <div className='b_poster'>
                <img src={apiConfig.l(props.item.poster_path)}/>
            </div>
        </div>

    )
}

export default Banner;